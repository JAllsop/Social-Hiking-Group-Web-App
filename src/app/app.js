'use strict'

const express = require('express')
const path = require('path')

const app = express()


app.use('/cdn', express.static(path.join(__dirname, '../', 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Loading Routes
const userRoutes = require('../server/routes/userRoutes.js')

// Mounting routes
app.use('/user', userRoutes)

module.exports = { app }

