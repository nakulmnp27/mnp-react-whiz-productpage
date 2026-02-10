const express = require('express')
const cors = require('cors')

const courseRoutes = require('./routes/course')
const healthRoutes = require('./routes/health')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/courses', courseRoutes)
app.use('/health', healthRoutes)

module.exports = app
