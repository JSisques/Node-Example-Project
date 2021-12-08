const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.get('/quote', controller.allQuotes)
router.post('/quote', controller.saveQuote)
router.post('/quote/:ID', controller.getQuote)

module.exports = router
