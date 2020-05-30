const { users } = require("../../models");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const generateAccessToken = require("../../lib/generatorAccessToken");
require("dotenv").config();

module.exports = {
  post: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const userInfo = { email, password };

      // validation check
      const schema = Joi.object({
        email: Joi.string().min(3).max(20).required(),
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
          { expiresIn: "3600000s" }
        );
        res.status(200).send({ success: true, accessToken, refreshToken });
      } else {
        res.status(404).send({ success: false, message: "not exist" });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
