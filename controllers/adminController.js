class AdminController {
  static adminView(req, res) {
    res.send("admin view");
  }

  static adminCreate(req, res) {
    res.send("admin create");
  }
}

module.exports = AdminController;
