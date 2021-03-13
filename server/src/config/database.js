const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://mongodb:27017/employeeHours", {
  useMongoClient: true,
});
