const { users } = require("../../models");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { username, email, password, mobile } = req.body;
      const option = { username, email, password, mobile };

      // 중복값 체크
      const emailExist = await users.findAll({
        where: { email } || { username },
      });
      if (emailExist[0]) {
        res.status(409).send({ conflict: "중복된 아이디 또는 이메일 입니다" });
      }

      // 계정 생성
      await users.create(option);
      res.status(200).send({ success: "계정이 생성되었습니다" });
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
