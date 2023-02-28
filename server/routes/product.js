const express = require('express');
const controller = require('../controllers').product;
const router = express.Router();

router.route('/')
    .post(controller.create)
    .get(controller.list);


router.route('/category/:categoryId')
    .post(controller.getProductsInCategory);

router.route('/topsales/')
    .get(controller.topSales);

router.route('/:product')
    .get(controller.get);


// favorites
router.post('/addtofavorite', controller.addToFavorite)
router.post('/removefromfavorite', controller.removeFromFavorite)
router.post('/getfavorites', controller.getFavorites)

router.post('/checkavailability', controller.checkAvailability)

module.exports = router;