const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "360s",
    // expiresIn: "5s",
  });
};

module.exports = generateAccessToken;
