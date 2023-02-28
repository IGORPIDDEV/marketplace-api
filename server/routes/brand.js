const express = require('express');
const controller = require('../controllers').brand
const router = express.Router();
// const auth = require('../middleware/auth');

router.route('/:categoryId')
    .get(controller.list);

module.exports = router;