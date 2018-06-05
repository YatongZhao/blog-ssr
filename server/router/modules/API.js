const express = require('express')
const router = express.Router()

router.use('/private', require('./API-private.js'))
router.use('/public', require('./API-public.js'))

module.exports = router
