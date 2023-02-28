const express = require('express');
const controller = require('../controllers').react;
const router = express.Router();

router.route('/menu')
    .post(controller.getMenu)

module.exports = router;