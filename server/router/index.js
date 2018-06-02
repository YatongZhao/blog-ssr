const express = require('express')
const router = express.Router()
const ctrl = require('../controller/index.js')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

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
router.get(/^\/manager-system\//, (req, res) => {
  res.sendFile(resolve('../../manager-system/index.html'))
})

module.exports = router
