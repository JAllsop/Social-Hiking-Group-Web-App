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
const viewRoutes = require('../server/routes/viewGroupRoutes')
const authRouter = require('../server/routes/authRoutes.js')

//mounting routers
app.use('/view',viewRoutes)
app.use('/', authRouter)

module.exports = { app }

