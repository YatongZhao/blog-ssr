const express = require('express')
const router = express.Router()
const { API_IDENTIFY } = require('../guards/identify.js')

router.all('/private', API_IDENTIFY)
router.use('/private', require('./API-private.js'))
router.use('/public', require('./API-public.js'))

module.exports = router
