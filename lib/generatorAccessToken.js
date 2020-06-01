const jwt = require("jsonwebtoken");
require("dotenv").config();

const generatorAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "600s",
  });
};

module.exports = generatorAccessToken;
