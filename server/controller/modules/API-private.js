const conn = require('../../model/index.js')

const add = (req, res) => {
  conn.query('insert into skill (name) value (?)', req.body.name, (err, results) => {
    if (err) {
      return res.json({
        code: -2,
        msg: '服务器错误',
        data: err
      })
    }
    return res.json({
      code: 0,
      msg: 'ok',
      data: {
        name: req.body.name,
        id: results.insertId
      }
    })
  })
}
const remove = (req, res) => {
  conn.query('delete from skill where id = ?', req.body.id, (err, results) => {
    if (err) {
      return res.json({
        code: -2,
        msg: '服务器错误',
        data: err
      })
    }
    return res.json({
      code: 0,
      msg: 'ok',
      data: results
    })
  })
}
const modify = (req, res) => {

}

module.exports = {
  skill: {
    add,
    remove,
    modify
  }
}
