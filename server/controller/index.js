const conn = require('../model/index.js')

function Home (req, res) {
  // console.log(req.session.isLogin)
  console.log('x-zyt76-uid', req.headers['x-zyt76-uid'])
  conn.query('select * from skill', (err, results) => {
    if (err) {
      console.log(err)
      return res.send('连接失败')
    }
    res.json(results)
  })
}

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
  Home,
  Login
}
