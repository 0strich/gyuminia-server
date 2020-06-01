const express = require("express");
const router = express.Router();
const { charactersController } = require("../controllers");

router.post("/info", charactersController.info.post);
router.post("/newChar", charactersController.newChar.post);
router.get("/rank", charactersController.rank.get);

module.exports = router;
