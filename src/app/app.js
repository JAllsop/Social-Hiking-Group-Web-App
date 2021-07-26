
'use strict'

const express = require('express')
const cors =  require('cors');
const app = express()
const path = require('path');
const socket = require('socket.io');
const http = require('http')
const server = http.createServer(app);
const io = socket(server);
const AppSockets  = require('../server/services/app-sockets');
const messageRouter = require('../server/routes/message-route');


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

io.on("connection", AppSockets.connection);
io.on("error", console.error);

app.use("/messages", messageRouter);



module.exports = { app }