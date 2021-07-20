import ClientSockets from '../model/client-sockets'
import { io } from "socket.io-client";

const socket = io('http://localhost:3000', {transports:["websocket"]});
socket.on("connection", ClientSockets.connection);
socket.on("error", console.error);

const sendButton = document.querySelector('send-button');

sendButton.addEventListener('click', event => {
   
});


displaySentMessage = (sender="me", content, dateTimeObject) =>{
    let timeString = formatAMPM(messageDate);
    let dateString = formatDate(messageDate);
    let messagesSection  = document.getElementById( "message-section" );

    let dateText = document.createTextNode(`${timeString} | ${dateString}`);

}

displayRecievedMessage = (sender,content, dateTimeObject) =>{
    let timeString = formatAMPM(messageDate);
    let dateString = formatDate(messageDate);
    let messagesSection  = document.getElementById( "message-section" );
    let dateText = document.createTextNode(`${timeString} | ${dateString}`);
    
}

formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  

formatDate = (date) =>{
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


