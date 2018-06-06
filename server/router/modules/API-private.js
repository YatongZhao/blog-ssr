const express = require('express')
const router = express.Router()
const { API_IDENTIFY } = require('../guards/identify.js')
const ctrl = require('../../controller/index.js')

router.use(API_IDENTIFY)

router.post('/skill/add', ctrl.private.skill.add)
router.post('/skill/remove', ctrl.private.skill.remove)

module.exports = router
