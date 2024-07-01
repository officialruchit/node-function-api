const express = require('express');
const router = express.Router();
const flattenController = require('../controllers/flattenController');
router.post('/flatten', flattenController.flatten);
module.exports = router;
