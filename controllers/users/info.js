const users = require("../../models");

module.exports = {
  get: async (req, res, next) => {
    if (req.session.userId) {
    } else {
    }
  },
};
