const express = require('express');
const router = express.Router();
const controller = require('../controllers').auth
const {decodeHeader} = require('../middleware/auth')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/check', decodeHeader, controller.check)

module.exports = router;