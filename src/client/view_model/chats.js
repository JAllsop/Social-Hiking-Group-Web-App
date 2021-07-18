import ClientSockets from '../model/client-sockets'
import { io } from "socket.io-client";

const socket = io('http://localhost:3000', {transports:["websocket"]});
socket.on("connection", ClientSockets.connection);
socket.on("error", console.error);

