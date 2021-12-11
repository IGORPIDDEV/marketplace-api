const express = require('express');
const category = require('./category');
const product = require('./product');
const unit = require('./unit');
const status = require('./status');
const auth = require('./auth');

const router = express.Router();

router.get('/status', (req, res) => res.send('OK'));

router.use('/category', category);
router.use('/product', product);
router.use('/unit', unit);
router.use('/status', status);
router.use('/auth', auth);

module.exports = router;