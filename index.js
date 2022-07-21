const express = require("express");
const app = express();
require("dotenv").config();

const routerF = require("./routes");

app.use(express.json());

routerF(app);

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
