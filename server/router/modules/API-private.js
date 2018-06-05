const express = require('express')
const router = express.Router()
const { API_IDENTIFY } = require('../guards/identify.js')

router.use(API_IDENTIFY)

module.exports = router
