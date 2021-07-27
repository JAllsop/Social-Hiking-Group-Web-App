'use strict'

const express = require('express')
const app = express()

const path = require('path')
const __dirname = path.resolve()

app.use('/cdn', express.static(path.join(__dirname, 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// loading routers
const homeRouter = require('../routes/homeRoute.js')
const groupRouter = require('../routes/groupRoutes.js')

// mounting routers
app.use('/', homeRouter)
app.use('/group', groupRouter)

module.exports = app
