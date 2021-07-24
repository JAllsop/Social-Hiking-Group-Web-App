'use strict'

const express = require('express')
const app = express()
const path = require('path')

app.use('/cdn', express.static(path.join(__dirname, 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Loading Routes
const userRoutes = require('../src/server/routes/userRoutes.js')

// Mounting routes
app.use('/user', userRoutes)

app.listen(3010)
console.log('Express server running on port 3000')
