const express = require("express");
module.exports = function (server) {
  const api = express.Router();
  server.use("/api", api);
  const EmployeeHours = require("../api/employeeHours/employeeHoursService");
  EmployeeHours.register(api, "/employeeHours");
};
