const mysql = require('mysql')
const {user, password} = require('../../mysql.js')

const conn = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database: 'blog',
  port: 3306
})

module.exports = conn
