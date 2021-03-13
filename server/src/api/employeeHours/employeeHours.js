const restFul = require("node-restful");
const mongoose = restFul.mongoose;

const employeeHoursSchema = new mongoose.Schema(
  {
    day: { type: String, required: true },
    begin: { type: String },
    end: { type: String },
    lunchBegin: { type: String },
    lunchEnd: { type: String },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

employeeHoursSchema.virtual("total").get(function () {
  return calculateTotal(
    this.begin,
    this.end,
    this.lunchBegin,
    this.lunchEnd,
    8
  );
});

const calculateTotal = function (
  begin,
  end,
  lunchBegin,
  lunchEnd,
  expectedHours
) {
  if (!begin || !end || !lunchBegin || !lunchEnd) {
    return "";
  }

  // To separate hours from minutes
  const bArray = begin.split(":");
  const eArray = end.split(":");
  const lbArray = lunchBegin.split(":");
  const leArray = lunchEnd.split(":");
  // To convert hours into Date objects
  const beginDate = new Date(2020, 0, 1, bArray[0], bArray[1]);
  const endDate = new Date(2020, 0, 1, eArray[0], eArray[1]);
  const lunchBeginDate = new Date(2020, 0, 1, lbArray[0], lbArray[1]);
  const lunchEndDate = new Date(2020, 0, 1, leArray[0], leArray[1]);

  // Returns the amount of hours above or below the expected working hours;
  const beginEndDiff = calculateDateDiff(
    beginDate,
    endDate,
    lunchBeginDate,
    lunchEndDate,
    expectedHours
  );

  return beginEndDiff;
};

const calculateDateDiff = function (
  beginDate,
  endDate,
  lunchBeginDate,
  lunchEndDate,
  expectedHours
) {
  let workingHours = "";
  if (lunchBeginDate > lunchEndDate) {
    return "";
  }
  if (beginDate > endDate) {
    endDate.setDate(endDate.getDate() + 1);
  }
  const lunchHours = Math.abs(lunchBeginDate - lunchEndDate);
  const hours = Math.abs(beginDate - endDate);
  workingHours = hours - lunchHours;
  workingHours = millisecondsToTime(workingHours, expectedHours);
  return workingHours;
};

const millisecondsToTime = function (date, expectedHours) {
  let calculatedHours = "";
  const milliseconds = date % 1000;
  date = (date - milliseconds) / 1000;
  const seconds = date % 60;
  date = (date - seconds) / 60;
  let minutes = date % 60;
  let hours = (date - minutes) / 60 - expectedHours;
  if (hours < 0 && minutes > 0) {
    hours = hours + 1;
    minutes = 60 - minutes;
    const signal = hours < 0 ? "" : "-";
    calculatedHours =
      minutes.toString().length > 1
        ? `${signal}${hours}:${minutes}`
        : `${signal}${hours}:0${minutes}`;
  } else {
    calculatedHours =
      minutes.toString().length > 1
        ? `${hours}:${minutes}`
        : `${hours}:0${minutes}`;
  }
  return calculatedHours;
};

module.exports = restFul.model("EmployeeHours", employeeHoursSchema);
