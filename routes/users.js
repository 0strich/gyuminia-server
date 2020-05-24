const express = require("express");
const router = express.Router();
const { usersController } = require("../controllers");

router.post("/signup", usersController.signup.post);
router.post("/login", usersController.login.post);

module.exports = router;
