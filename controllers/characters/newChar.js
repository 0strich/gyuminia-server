const { characters } = require("../../models");

module.exports = {
  post: async (req, res, next) => {
    try {
      const { userId, characterName } = req.body;

      const exist = await characters.findOne({ where: { characterName } });

      if (exist) {
        res.status(409).send({ exist: true });
      } else {
        await characters.create({ userId, characterName });
        const charInfo = await characters.findOne({ where: { characterName } });
        res.status(200).send({ charInfo });
      }
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
