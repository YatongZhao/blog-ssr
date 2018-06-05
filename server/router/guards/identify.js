const isLogin = (req) => {
  return req.headers['x-zyt76-uid'] &&
    req.headers['x-zyt76-uid'] === req.cookies['zyt76-uid'] &&
    req.session.isLogin
}

module.exports = {
  API_IDENTIFY (req, res, next) {
    if (isLogin(req)) {
      next()
    } else {
      return res.json({code: -100, msg: '未登录'})
    }
  },
  PAGE_IDENTIFY (req, res, next) {
    if (isLogin(req)) {
      next()
    } else {
      return res.redirect('/manager-system/entry')
    }
  }
}
