const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader.split(" ")[1];

  if (!token)
    return res.status(403).send({ success: false, message: "not logged in" });

  const verify = new Promise((res, rej) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) rej(err);
      res(payload);
    });
  });

  const onError = (err) =>
    res.status(403).send({ success: false, message: err.message });

  verify
    .then((payload) => {
      req.payload = payload;
      next();
    })
    .catch(onError);
};

module.exports = authMiddleware;
