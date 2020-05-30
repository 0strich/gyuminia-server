const jwt = require("jsonwebtoken");
require("dotenv").config();

const generatorAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "60s",
  });
};

module.exports = generatorAccessToken;
