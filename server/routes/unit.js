const express = require('express');
const controller = require('../controllers').unit;
const router = express.Router();

router.route('/')
    .post(controller.create)
    .get(controller.list);

module.exports = router;