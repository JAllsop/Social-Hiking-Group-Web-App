'use strict'

const express = require('express')
const cors = require('cors');
const app = express()
const path = require('path')
const socket = require('socket.io');
const server = http.createServer(app);
const io = socket(server);
const appSockets = require('./server/services/AppSockets')
const messageRouter = require('.server/routes/message-route')

app.use(cors({
    "origin": "*",
    "methods": ["GET","HEAD","PUT","PATCH","POST","DELETE", "OPTIONS"],
    "headers": ["origin", "x-requested-with", "accept", "create", "request", "doPoll", "poll", "open", "doOpen"],
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));

app.use('/cdn', express.static(path.join(__dirname, 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000)
console.log('Express server running on port 3000')

io.on("connection", appSockets.connection);
io.on("error", console.error);

app.use("/messages", messageRouter);
