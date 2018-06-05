const express = require('express')
const router = express.Router()
const ctrl = require('../../controller/index.js')

router.get('/skill.json', ctrl.Home)
router.post('/login', ctrl.Login)

module.exports = router
