const { users } = require("../../models");
const Joi = require("joi");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { username, password, email } = req.body;
      const option = { username, password, email };

      // validation schema
      const schema = Joi.object({
        username: Joi.string().alphanum().min(4).max(15).required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        email: Joi.string().email().normalize(),
      });

      // validation check
      const check = Joi.validate(req.body, schema);

      if (check.error) {
        res.status(401).send({ error: check.error });
      } else {
        // 중복값 체크
        const exist = await users.findOne({ where: { username } });
        if (exist) {
          res.status(409).send({ conflict: "중복된 아이디 입니다" });
        } else {
          // 계정 생성
          await users.create(option);
          res.status(200).send({ success: "계정이 생성되었습니다" });
        }
      }
    } catch (err) {
      next();
    }
  },
};
