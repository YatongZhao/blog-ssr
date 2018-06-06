const conn = require('../model/index.js')
const API_PRIVATE = require('./modules/API-private.js')
const API_PUBLIC = require('./modules/API-public.js')

function Login (req, res) {
  conn.query('select password from user where name=?', req.body.name, (err, results) => {
    if (err) {
      return res.json({
        code: -2,
        msg: '服务器错误'
      })
    }
    if (results.length === 0) {
      return res.json({
        code: -3,
        msg: '用户未注册'
      })
    }
    if (results[0].password !== req.body.password) {
      return res.json({
        code: -1,
        msg: '密码错误'
      })
    }
    req.session.isLogin = true
    res.json({
      code: 0,
      msg: '登录成功'
    })
  })
}

module.exports = {
  Login,
  public: {
    skill: {
      list: API_PUBLIC.skill.list
    }
  },
  private: {
    skill: {
      add: API_PRIVATE.skill.add,
      remove: API_PRIVATE.skill.remove
    }
  }
}
