const express = require('express')
const router = express.Router()

// router.use(function (req, res, next) {
//   if (/^(\/api\/)/ig.test(req.originalUrl)) {
//     if (
//       /^\/api\/login$/ig.test(req.originalUrl) ||
//       (req.headers['x-zyt76-uid'] &&
//       req.headers['x-zyt76-uid'] === req.cookies['zyt76-uid'] &&
//       req.session.isLogin)
//     ) {
//       next()
//     } else {
//       return res.json({code: -100, msg: '未登录'})
//     }
//   } else if (
//     /^(\/manager-system\/)/ig.test(req.originalUrl) &&
//     !/^(\/manager-system\/login)/ig.test(req.originalUrl)
//   ) {
//     if (
//       req.headers['x-zyt76-uid'] &&
//       req.headers['x-zyt76-uid'] === req.cookies['zyt76-uid'] &&
//       req.session.isLogin
//     ) {
//       next()
//     } else {
//       return res.redirect('/manager-system/login')
//     }
//   } else {
//     next()
//   }
// })

router.use('/api', require('./modules/API.js'))
router.use('/manager-system', require('./modules/ManagerSystem/index.js'))

module.exports = router
