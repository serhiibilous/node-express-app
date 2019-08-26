const express = require('express')
require('./db/mongoose')
// const cors = require("cors")
// const path = require('path')

// Import Routes
// const UserRouter = require('./routes/user')
// const TaskRouter = require('./routes/task')

const app = express()
const path = require('path')
publicDir = path.join(__dirname, '../public')

app.use(express.static(publicDir))

// app.listen(port)
module.exports = app


// app.use(cors())
// app.use(express.json())
// app.use(UserRouter)
// app.use(TaskRouter)

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/public', 'index.html'))
// })




