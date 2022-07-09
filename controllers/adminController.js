const adminView = (req, res) => {
  res.send("Hello World! From the admin view route");
};

const adminCreate = (req, res) => {
  res.send("Hello World! From the admin create route");
};

module.exports = { adminView, adminCreate };
