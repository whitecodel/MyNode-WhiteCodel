const ensureAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (token == "token") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

const ensureNotAuthenticated = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
};

module.exports = { ensureAuthenticated };
