const { characters } = require("../../models");

module.exports = {
  get: async (req, res, next) => {
    try {
      const rank = await characters.findAll();
      res.status(200).send(rank);
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
