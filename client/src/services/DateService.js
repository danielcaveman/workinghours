import moment from "moment";
import { toastr } from "react-redux-toastr";

export class DateService {
  generateMonth(dateParameter) {
    const date = dateParameter ? dateParameter : new Date();
    const data = [];
    let firstDayMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (
      firstDayMonth;
      firstDayMonth <= lastDayMonth;
      firstDayMonth.setDate(firstDayMonth.getDate() + 1)
    ) {
      data.push({
        day: moment(firstDayMonth).toISOString(),
        begin: "",
        end: "",
        lunchBegin: "",
        lunchEnd: "",
        total: "",
      });
    }
    return data;
  }

  formatDate(value, format) {
    if (!value) return "Invalid Date";
    const dateFormat = format ? format : "MM/DD/YYYY";
    const dateUTC = moment.utc(value);
    return moment(dateUTC).format(dateFormat);
  }

  calculateTotal(data, expectedHours) {
    const { begin, end, lunchBegin, lunchEnd } = data;

    if (!begin || !end || !lunchBegin || !lunchEnd) {
      toastr.error("Invalid Hour", "Incomplete day's information.");
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
    const beginEndDiff = this._calculateDateDiff(
      beginDate,
      endDate,
      lunchBeginDate,
      lunchEndDate,
      expectedHours
    );

    return beginEndDiff;
  }

  _calculateDateDiff(
    beginDate,
    endDate,
    lunchBeginDate,
    lunchEndDate,
    expectedHours
  ) {
    let workingHours = "";
    if (lunchBeginDate > lunchEndDate) {
      toastr.error(
        "Invalid Hour",
        "the start time of lunch must be before the end of lunch."
      );
      return "";
    }
    if (beginDate > endDate) {
      endDate.setDate(endDate.getDate() + 1);
    }
    const lunchHours = Math.abs(lunchBeginDate - lunchEndDate);
    const hours = Math.abs(beginDate - endDate);
    workingHours = hours - lunchHours;
    workingHours = this._millisecondsToTime(workingHours, expectedHours);
    return workingHours;
  }

  _millisecondsToTime(date, expectedHours) {
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
  }
}
