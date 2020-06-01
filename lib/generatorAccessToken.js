const jwt = require("jsonwebtoken");
require("dotenv").config();

const generatorAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10s",
  });
};

module.exports = generatorAccessToken;
