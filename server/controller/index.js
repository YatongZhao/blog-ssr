const conn = require('../model/index.js')

function Home (req, res) {
  conn.query('select name from skill where id=?', 2, (err, results) => {
    if (err) {
      console.log(err)
      return res.send('连接失败')
    }
    res.send(results[0])
  })
}

module.exports = {
  Home
}
