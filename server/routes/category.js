const express = require('express');
const controller = require('../controllers').category;
const router = express.Router();

router.route('/')
    .post(controller.create)
    .get(controller.list);

router.route('/:category')
    .get(controller.get);

module.exports = router;