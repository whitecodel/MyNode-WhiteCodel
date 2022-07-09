const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World! From the teacher route");
});

module.exports = router;
