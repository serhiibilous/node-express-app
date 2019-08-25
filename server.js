const express = require('express')
const port = process.env.PORT || 3000
const app = express()
path = require('path')
publicDir = path.join(__dirname,'public')

app.use(express.static(publicDir))

app.listen(port)
module.exports = app
