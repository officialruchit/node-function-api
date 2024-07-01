const express = require("express");
const router = express.Router();
const deepCloneController = require("../controllers/deepcloneController");
router.post("/deepclone", deepCloneController.deepclone);
module.exports = router;
