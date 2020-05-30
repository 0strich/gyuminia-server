const { characters } = require("../../models");

module.exports = {
  post: async (req, res, next) => {
    try {
      console.log("char ==> ", req.body);
      if (req.session.userId) {
        console.log(req.session);
        const info = await characters.findAll({
          where: { userId: 1 },
        });
        console.log("info ==> ", info);
        res.status(200).send(info);
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
