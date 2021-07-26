'use strict'

const express = require('express')
const app = express()

const path = require('path')

app.use('/cdn', express.static(path.join(__dirname, 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// loading routers
const viewRoutes = require('../server/routes/viewGroupRoutes')

//mounting routers

app.use('/view',viewRoutes)

module.exports = { app }