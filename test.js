const jwt = require("jsonwebtoken");

const key = "secret";

const data = { name: "John Doe", exp: Date.now() };

const expTime = 5000;

const generateToken = () => {
  const token = jwt.sign(data, key);
  return token;
};

const decodeToken = () => {
  const token = generateToken();
  const decoded = jwt.decode(token, key);
  return decoded;
};

const tokenExpried = () => {
  const decoded = decodeToken();
  const exp = decoded.exp;
  setTimeout(() => {
    if (exp + expTime < Date.now()) {
      console.log("Token expired");
    } else {
      console.log("Token not expired");
    }
  }, 3000);
};

tokenExpried();

// console.log(tokenExpried());
