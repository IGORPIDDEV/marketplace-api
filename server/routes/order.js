const express = require('express');
const controller = require('../controllers').order;
const router = express.Router();

router.route('/')
    .post(controller.create)
    .get(controller.list);

router.route('/getbyuser')
    .post(controller.getByUser)

module.exports = router;