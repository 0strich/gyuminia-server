const { users } = require("../../models");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const generateAccessToken = require("../../lib/generateAccessToken");
require("dotenv").config();

module.exports = {
  post: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const userInfo = { username, password };

      const schema = Joi.object({
        username: Joi.string().alphanum().min(4).max(15).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
      });

      // validation check
      const check = Joi.validate(req.body, schema);

      if (check.error) {
        res.status(401).send({ error: check.error });
      } else {
        // 계졍 확인
        const account = await users.findOne({ where: userInfo });

        if (account) {
          // jwt accesstoken
          const payload = { username: account.username, email: account.email };
          const accessToken = generateAccessToken(payload);
          const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            // { expiresIn: "360000s" }
            { expiresIn: "20s" }
          );
          res.status(200).send({
            success: true,
            accessToken,
            refreshToken,
            userId: account.id,
            username: account.username,
          });
        } else {
          res.status(404).send({ success: false, message: "not exist" });
        }
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
