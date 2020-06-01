const { users } = require("../../models");

module.exports = {
  get: async (req, res, next) => {
    try {
      res.status(200).send({ success: "success" });
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
