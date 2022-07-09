const router = require("express").Router();
const { adminView, adminCreate } = require("../controllers/adminController");

router.get("/", adminView);
router.get("/create", adminCreate);

module.exports = router;
