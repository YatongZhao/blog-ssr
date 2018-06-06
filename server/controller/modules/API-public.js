const conn = require('../../model/index.js')

const list = (req, res) => {
  conn.query('select * from skill', (err, results) => {
    if (err) {
      console.log(err)
      return res.send({
        code: -2,
        msg: '服务器错误'
      })
    }
    res.json({
      code: 0,
      msg: '获取列表成功',
      data: results
    })
  })
}

module.exports = {
  skill: {
    list
  }
}
