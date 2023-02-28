const express = require('express');
const category = require('./category');
const product = require('./product');
const unit = require('./unit');
const status = require('./status');
const auth = require('./auth');
const order = require('./order');
const brand = require('./brand');
const filter = require('./filter');
const react = require('./react');
const user = require('./user');

const router = express.Router();

router.get('/status', (req, res) =>
    res.send('OK'));

router.use('/category', category);
router.use('/product', product);
router.use('/unit', unit);
router.use('/status', status);
router.use('/auth', auth);
router.use('/order', order);
router.use('/brand', brand);
router.use('/filter', filter);
router.use('/react', react);
router.use('/user', user);

module.exports = router;