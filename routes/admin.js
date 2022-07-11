const router = require("express").Router();
const AdminController = require("../controllers/adminController");
const { ensureAuthenticated } = require("../middlewares/authMiddleware");

router.get("/", ensureAuthenticated, AdminController.adminView);

router.get("/create", AdminController.adminCreate);

module.exports = router;
