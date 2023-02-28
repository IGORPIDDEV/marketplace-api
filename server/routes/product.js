const express = require('express');
const controller = require('../controllers').product;
const router = express.Router();
const { getUserIdByHeader } = require('../middleware/auth')

router.route('/')
    .post(controller.create)
    .get(controller.list);

router.post('/category/:categoryId', getUserIdByHeader, controller.getProductsInCategory)
router.get('/topsales', getUserIdByHeader, controller.topSales)

router.route('/:product')
    .get(controller.get);

// favorites
router.post('/addtofavorite', controller.addToFavorite)
router.post('/removefromfavorite', controller.removeFromFavorite)
router.post('/getfavorites', controller.getFavorites)

router.post('/checkavailability', controller.checkAvailability)

module.exports = router;