const student = require("./routes/student");
const teacher = require("./routes/teacher");
const admin = require("./routes/admin");

module.exports = function (app) {
  app.use("/student", student);
  app.use("/teacher", teacher);
  app.use("/admin", admin);
};
