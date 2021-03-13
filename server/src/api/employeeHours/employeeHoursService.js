const EmployeeHours = require("./employeeHours");
const errorHandler = require("../common/errorHandler");

EmployeeHours.updateOptions({ new: true, runValidators: true });
EmployeeHours.methods(["get", "post", "put", "delete"]);
EmployeeHours.after("post", errorHandler).after("put", errorHandler);

module.exports = EmployeeHours;
