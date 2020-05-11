const { users } = require("../../models");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const option = { email, password };

      const exist = await users.findAll({ where: option });

      if (exist[0]) {
        req.session.userId = exist[0].id;
        req.session.userSess = req.session.id;
        res.status(200).send({ success: "login success" });
      } else {
        res.status(404).send({ fail: "not exist" });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
