const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");
const authMiddleware = require("../middleware/jwt/authMiddleware");

router.post("/login", usersController.login.post);
router.post("/signup", usersController.signup.post);
router.post("/token", usersController.token.post);
router.use("/check", authMiddleware);
router.get("/check", usersController.check.get);

module.exports = router;
