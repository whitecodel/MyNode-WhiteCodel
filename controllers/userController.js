class UserController {
  static login = async (req, res) => {
    try {
      const { username, password } = req.body;

      // validate username and password
      if (!username || !password) {
        return res.status(400).send("Please enter username and password");
      }

      // check if user exists
      const user = {
        _id: 1,
        username: "admin",
        password: "admin",
      };

      if (username !== user.username || password !== user.password) {
        return res.status(400).send("Invalid username or password");
      }

      // generate token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

      // send token
      res.send(token);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server error");
    }
  };

  static list = async (req, res) => {
    try {
      // now get user
      console.log(req.user);

      const users = [
        {
          _id: 1,
          username: "admin",
          password: "admin",
        },
        {
          _id: 2,
          username: "admin2",
          password: "admin2",
        },
      ];

      res.send(users);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server error");
    }
  };
}

module.exports = UserController;
