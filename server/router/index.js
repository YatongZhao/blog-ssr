const express = require('express')
const router = express.Router()
const ctrl = require('../controller/index.js')

router.get('/api/skill.json', ctrl.Home)

module.exports = router
