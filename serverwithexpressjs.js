const express = require("express");
const app = express();
require("dotenv").config();
const getF = require("./getF");

const PORT = process.env.PORT || 3000;

app.get("/student/view", getF);
app.get("/student/create", getF);
app.get("/student/update", getF);
app.get("/student/delete", getF);

app.get("/teacher/view", getF);
app.get("/teacher/create", getF);
app.get("/teacher/update", getF);
app.get("/teacher/delete", getF);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
