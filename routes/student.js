const router = require("express").Router;

router.get("/", (req, res) => {
  res.send("Hello World! From the student route");
});

module.exports = router;
