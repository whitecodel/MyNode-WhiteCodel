const router = require("express").Router();
const AdminController = require("../controllers/adminController");

router.get("/", AdminController.adminView);
router.get("/create", AdminController.adminCreate);

module.exports = router;
