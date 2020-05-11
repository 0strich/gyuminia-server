const { characters } = require("../../models");

module.exports = {
  get: async (req, res, next) => {
    try {
      if (req.session.userId) {
        const info = await characters.findAll({
          where: { userId: 1 },
        });
        console.log(info);
        res.status(200).send(info);
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
