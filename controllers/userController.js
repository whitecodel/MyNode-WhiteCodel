const jwt = require("jsonwebtoken");

class UserController {
  static login = async (req, res) => {
    try {
      console.log(req.body);
      res.send("");
      // const { username, password } = req.body;
      // const token = jwt.sign("hello", process.env.JWT_SECRET);
      // return res.send(token);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server error");
    }
  };
}

module.exports = UserController;
