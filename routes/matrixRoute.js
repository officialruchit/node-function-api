const express = require("express");
const router = express.Router();
const matrixController = require("../controllers/matrixController");
router.post("/rotateMatrix", matrixController.rotateMatrix);
module.exports = router;
