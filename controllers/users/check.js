const generateAccessToken = require("../../lib/generateAccessToken");
require("dotenv").config();

module.exports = {
  get: async (req, res, next) => {
    try {
      const { username, email } = req.body.payload;
      const accessToken = generateAccessToken({ username, email });
      res.status(200).send({ success: true, accessToken });
    } catch (err) {
      console.log(err);
      next();
    }
  },
};
