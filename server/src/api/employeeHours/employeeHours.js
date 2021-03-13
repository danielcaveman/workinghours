const restFul = require("node-restful");
const mongoose = restFul.mongoose;

const employeeHoursSchema = new mongoose.Schema({
  day: { type: String, required: true },
  begin: { type: String },
  end: { type: String },
  lunchBegin: { type: String },
  lunchEnd: { type: String },
  total: { type: String },
});

module.exports = restFul.model("EmployeeHours", employeeHoursSchema);
