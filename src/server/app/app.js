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
import homeRouter from '../routes/homeRoute.js'
// import groupRouter from './server/routes/groupRoutes.js'

//mounting routers
app.use('/',homeRouter)
// app.use('/group',groupRouter)

export default app