const express = require('express');
const controller = require('../controllers').product;
const router = express.Router();

router.route('/')
    .post(controller.create)
    .get(controller.list);


router.route('/category/:categoryId')
    .post(controller.listByCategory);

router.route('/topsales/')
    .get(controller.topSales);

router.route('/:product')
    .get(controller.get);

router.post('/addtofavorite', controller.addToFavorite)
router.post('/removefromfavorite', controller.removeFromFavorite)

module.exports = router;