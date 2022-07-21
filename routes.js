const student = require("./routes/student");
const teacher = require("./routes/teacher");
const admin = require("./routes/admin");
const user = require("./routes/user");

module.exports = function (app) {
  app.use("/student", student);
  app.use("/teacher", teacher);
  app.use("/admin", admin);
  app.use("/user", user);
};
