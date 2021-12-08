const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/quote', controller.randomQuote)
router.post('/quote', controller.saveQuote)

module.exports = router
