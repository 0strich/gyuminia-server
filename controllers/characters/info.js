const { characters } = require("../../models");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { userId } = req.body;

      const info = await characters.findAll({
        where: { userId },
      });

      if (info[0]) {
        res.status(200).send(info);
      } else {
        res.status(404).send({});
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
