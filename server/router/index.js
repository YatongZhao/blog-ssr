const express = require('express')
const router = express.Router()
const ctrl = require('../controller/index.js')

router.use(function (req, res, next) {
  console.log(req.sessionID)
  // console.log(req.session.isLogin)
  if (
    /^(\/manager-system\/api\/)/ig.test(req.originalUrl) &&
    req.headers['X-zyt76-UID'] &&
    req.headers['X-zyt76-UID'] === req.cookies['connect.sid']
  ) {
    console.log('ok')
  }
  next()
})
router.get('/api/skill.json', ctrl.Home)
router.post('/api/login', ctrl.Login)

module.exports = router
