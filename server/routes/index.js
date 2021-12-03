const express = require('express');
const category = require('./category');
const product = require('./product');
const unit = require('./unit');
const status = require('./status');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/category', category);
router.use('/product', product);
router.use('/unit', unit);
router.use('/status', status);

module.exports = router;