const router = require("express").Router();
const UserController = require("../controllers/userController");
const { ensureAuthenticated } = require("../middlewares/authMiddleware");

router.post("/login", UserController.login);
router.get("/list", ensureAuthenticated, UserController.list);

module.exports = router;
