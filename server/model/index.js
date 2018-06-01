const mysql = require('mysql')
const {mysql: {user, password}} = require('../../globalConfig.js')

const conn = mysql.createConnection({
  host: 'localhost',
  user,
  password,
  database: 'blog',
  port: 3306
})

module.exports = conn
