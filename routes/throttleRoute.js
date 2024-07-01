const express = require('express');
const router = express.Router();
const throttleController = require('../controllers/throttleController');
router.post('/throttle/save', throttleController.saveChanges);
module.exports = router;
