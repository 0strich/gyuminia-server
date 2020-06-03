const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  try {
    if (!token)
      return res.status(403).send({ success: false, message: "not logged in" });

    const verify = new Promise((res, rej) => {
      jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
        if (err) rej(err);
      });
    });

    const onError = (err) =>
      res.status(403).send({ success: false, message: err.message });

    verify
      .then((payload) => {
        req.body.payload = payload;
        next();
      })
      .catch(onError);
  } catch (err) {
    console.log(err);
  }
};

module.exports = authMiddleware;
