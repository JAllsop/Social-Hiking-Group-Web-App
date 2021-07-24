'use strict'

// const express = require('express')
import express from 'express'
const app = express()

// const path = require('path')
import path from 'path'
const __dirname = path.resolve()

app.use('/cdn', express.static(path.join(__dirname, 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// loading routers
import viewRoutes from './server/routes/viewGroupRoutes.js'

//mounting routers

app.use('/view',viewRoutes)

app.listen(3000)
console.log('Express server running on port 3000')
