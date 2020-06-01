const { users } = require("../../models");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const generateAccessToken = require("../../lib/generatorAccessToken");
require("dotenv").config();

const refreshTokens = [];

module.exports = {
  post: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const userInfo = { username, password };

      // validation check
      const schema = Joi.object({
        username: Joi.string().min(3).max(20).required(),
        password: Joi.string().required(),
      });
      const vali = Joi.validate(req.body, schema);

      // account check
      const exist = await users.findAll({ where: userInfo });

      if (exist[0]) {
        // jwt accesstoken
        const accessToken = generateAccessToken(userInfo);
        const refreshToken = jwt.sign(
          userInfo,
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "30s" }
        );
        refreshTokens.push(refreshToken);
        res.status(200).send({
          success: true,
          accessToken,
          refreshToken,
          userId: exist[0].id,
          username: exist[0].username,
        });
      } else {
        res.status(404).send({ success: false, message: "not exist" });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
  refreshTokens,
};
