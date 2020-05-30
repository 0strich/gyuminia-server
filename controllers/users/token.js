const jwt = require("jsonwebtoken");
const generateAccessToken = require("../../lib/generatorAccessToken");
const { refreshTokens } = require("./login");
require("dotenv").config();

module.exports = {
  post: async (req, res, next) => {
    try {
      const refreshToken = req.body.token;
      if (!refreshToken) res.sendStatus(401);
      if (!refreshTokens.includes(refreshToken)) res.sendStatus(403);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, payload) => {
          if (err) res.status(403).send({ err });
          const { email, password } = payload;
          const accessToken = generateAccessToken({ email, password });
          res.status(200).send({ accessToken });
        }
      );
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
