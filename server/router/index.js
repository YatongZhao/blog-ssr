const express = require('express')
const router = express.Router()
const ctrl = require('../controller/index.js')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

router.use(function (req, res, next) {
  if (/^(\/api\/)/ig.test(req.originalUrl)) {
    if (
      /^\/api\/login$/ig.test(req.originalUrl) ||
      (req.headers['x-zyt76-uid'] &&
      req.headers['x-zyt76-uid'] === req.cookies['zyt76-uid'] &&
      req.session.isLogin)
    ) {
      next()
    } else {
      return res.json({code: -100, msg: '未登录'})
    }
  } else if (
    /^(\/manager-system\/)/ig.test(req.originalUrl) &&
    !/^(\/manager-system\/login)/ig.test(req.originalUrl)
  ) {
    if (
      req.headers['x-zyt76-uid'] &&
      req.headers['x-zyt76-uid'] === req.cookies['zyt76-uid'] &&
      req.session.isLogin
    ) {
      next()
    } else {
      return res.redirect('/manager-system/login')
    }
  } else {
    next()
  }
})

router.get('/api/skill.json', ctrl.Home)
router.post('/api/login', ctrl.Login)
router.get(/^\/manager-system\//, (req, res) => {
  res.sendFile(resolve('../../manager-system/index.html'))
})

module.exports = router
