const express = require("express");
const router = express.Router();
const { charactersController } = require("../controllers");

router.get("/info", charactersController.info.get);

module.exports = router;
