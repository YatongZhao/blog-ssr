const express = require('express')
const router = express.Router()
const path = require('path')
const resolve = file => path.resolve(__dirname, file)

router.get('*', (req, res) => {
  res.sendFile(resolve('../../../../manager-system/index.html'))
})

module.exports = router
