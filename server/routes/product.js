const express = require('express');
const controller = require('../controllers').product;
const router = express.Router();

router.route('/')
    .post(controller.create)
    .get(controller.list);


router.route('/category/:categoryId')
    .get(controller.listByCategory);

router.route('/topsales/')
    .get(controller.topSales);

router.route('/:product')
    .get(controller.get);

module.exports = router;