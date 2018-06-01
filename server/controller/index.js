const conn = require('../model/index.js')

function Home (req, res) {
  conn.query('select name from skill', (err, results) => {
    if (err) {
      console.log(err)
      return res.send('连接失败')
    }
    res.json(results)
  })
}

module.exports = {
  Home
}
