const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbConn =
  process.env.NODE_ENV === "development"
    ? "mongodb://localhost/employeeHours"
    : "mongodb://mongodb:27017/employeeHours";

module.exports = mongoose.connect(dbConn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
