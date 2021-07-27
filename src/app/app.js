'use strict'

const express = require('express')
const path = require('path')
const session = require('./session').session

const app = express()

// session management
app.use(session)

app.use('/cdn', express.static(path.join(__dirname, '../', 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// loading routers
const userRoutes = require('../server/routes/userRoutes.js').router
const authRouter = require('../server/routes/authRoutes.js')
const viewRoutes = require('../server/routes/viewGroupRoutes')
const groupRouter = require('../server/routes/groupRoutes.js').router

//mounting routers
app.use('/group', groupRouter)
app.use('/view',viewRoutes)
app.use('/', authRouter)
app.use('/user', userRoutes)
module.exports = { app }
