'use strict'
const express = require('express')
import cors from 'cors';
const app = express()
const path = require('path');
import socket from 'socket.io';
const server = http.createServer(app);
const io = socket(server);
import { connection } from './server/services/AppSockets';
import messageRouter from '.server/routes/message-route';

app.use(cors({
    "origin": "*",
    "methods": ["GET","HEAD","PUT","PATCH","POST","DELETE", "OPTIONS"],
    "headers": ["origin", "x-requested-with", "accept", "create", "request", "doPoll", "poll", "open", "doOpen"],
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));

app.use('/cdn', express.static(path.join(__dirname, 'client')))

// tell Express to use bodyParser for JSON and URL encoded form bodies
app.use(json())
app.use(urlencoded({ extended: true }))

app.listen(3000)
console.log('Express server running on port 3000')

io.on("connection", connection);
io.on("error", console.error);

app.use("/messages", messageRouter);
