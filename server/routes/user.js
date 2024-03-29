const express = require('express');
const router = express.Router();
const controller = require('../controllers').user

router.patch('/:userId', controller.update)

module.exports = router;