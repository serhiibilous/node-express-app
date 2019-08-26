const express = require('express')
require('./db/mongoose')
const cors = require("cors")
const path = require('path')

// Import Routes
const UserRouter = require('./routes/user')
const TaskRouter = require('./routes/task')

const app = express()
app.use(express.static(path.join(__dirname, '../client/public')))

app.use(cors())
app.use(express.json())
app.use(UserRouter)
app.use(TaskRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'))
})

module.exports = app
