const express = require('express');
const controller = require('./controller')

const router = express.Router();

router.post('/auth/login', controller.login)
router.post('/auth/signup', controller.signUp)

module.exports = router
