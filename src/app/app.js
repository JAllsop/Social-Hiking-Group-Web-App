'use strict'

const express = require('express')
const path = require('path')
const socket = require('socket.io');
const http = require('http')
const server = http.createServer(app);
const io = socket(server);
const cors = require('./cors')
const session = require('./session').session
const AppSockets  = require('../server/services/app-sockets');
const messageRouter = require('../server/routes/message-route');

const app = express()

// session management
app.use(session)
app.use(cors);

app.use('/cdn', express.static(path.join(__dirname, '../', 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const authRouter = require('../server/routes/authRoutes.js')

app.use("/messages", messageRouter);
app.use('/', authRouter)

io.on("connection", AppSockets.connection);
io.on("error", console.error);

module.exports = { app }
