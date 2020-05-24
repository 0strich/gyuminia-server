const express = require("express");
const router = express.Router();
const { charactersController } = require("../controllers");

router.post("/info", charactersController.info.post);

module.exports = router;
