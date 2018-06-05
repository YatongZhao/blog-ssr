const express = require('express')
const router = express.Router()

router.use('/entry', require('./entry'))
router.use('*', require('./main'))

module.exports = router
