const jwt = require("jsonwebtoken");

const ensureAuthenticated = (req, res, next) => {
  // check if user is logged in
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send("Please login first");
  }

  // verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    return res.status(401).send("Invalid token");
  }

  next();
};

const ensureNotAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

module.exports = { ensureAuthenticated };
