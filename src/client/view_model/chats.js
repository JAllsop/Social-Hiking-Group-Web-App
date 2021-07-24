// import { io } from "local-module/socket.io-client";

import { io } from "socket.io-client";
import {retrieveGroupMessages} from "../model/chat-functions"

const socket = io('http://localhost:3000', {transports:["websocket"]});
socket.on("connection", ()=>{
    console.log("connection made")
})
socket.on("error", console.error);
socket.on("retrieveGroupMessages", (groupID) =>{
   retrieveGroupMessages(groupID)
   .then(data=> console.log(data)) // display messages for respective groups.
})
socket.on("sendTextMessage", (data)=>{
    displayRecievedMessage(data.sender,data.content,data.date)

})
socket.on("subscribe", (groupID) =>{

    socket.emit("groupID", groupID)
})

$(document).ready(function(){
    $("#button-send").click(function(){
        console.log("Send Button Clicked!")
        let message = $("#message-content").val()
        const dateObject = new Date();
        let sender = "Sino Mazibuko"
        displaySentMessage(sender,message,dateObject);
            let data = {"sender":`${sender}`, "content":`${message}`,"date":dateObject} 
        socket.on("sendTextMessage", (data)=>{
            socket.broadcast.emit(data)
        })

    })
   
})



const displaySentMessage = (sender="me", content, dateTimeObject) =>{

    let timeString = formatAMPM(dateTimeObject);
    let dateString = formatDate(dateTimeObject);
    let messagesSection  = document.getElementById("message-area");
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute("class", "ml-auto position-relative chat-right text-white");

    let senderDiv = document.createElement('div');
    senderDiv.setAttribute("class", "namepadding")

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute("class","d-flex align-items-center")

    let dateDiv = document.createElement('div');
    dateDiv.setAttribute("class","position-absolute bottom-0 end-0" )

    let senderPTag = document.createElement('p');
    senderPTag.setAttribute("class","nm")

    let dateTextPTag = document.createElement('p');
    dateTextPTag.setAttribute("class", "text-small mb-0 text-white")

    let messageText = document.createTextNode(`${content}`);
    let senderName = document.createTextNode(`${sender}`);
    let dateText = document.createTextNode(`${timeString} | ${dateString}`);

    dateTextPTag.appendChild(dateText)
    senderPTag.appendChild(senderName)

    dateDiv.appendChild(dateTextPTag)
    contentDiv.appendChild(messageText)
    senderDiv.appendChild(senderPTag)

    messageDiv.appendChild(dateDiv)
    messageDiv.appendChild(contentDiv)
    messageDiv.appendChild(senderPTag)

    let breakTag1 = document.createElement('br')
    let breakTag2 = document.createElement('br')

    messagesSection.appendChild(messageDiv)
    messagesSection.appendChild(breakTag1)
    messagesSection.appendChild(breakTag2)
    
  
    
    body.append(messagesSection);
    

}

const displayRecievedMessage = (sender,content, dateTimeObject) =>{
    let timeString = formatAMPM(dateTimeObject);
    let dateString = formatDate(dateTimeObject);
    let messagesSection  = document.getElementById("message-area");
    let messageDiv = document.createElement('div');
    messageDiv.setAttribute("class", "mr-auto position-relative chat-left text-white");

    let senderDiv = document.createElement('div');
    senderDiv.setAttribute("class", "namepadding")

    let contentDiv = document.createElement('div');
    contentDiv.setAttribute("class","d-flex align-items-center")

    let dateDiv = document.createElement('div');
    dateDiv.setAttribute("class","position-absolute bottom-0 end-0" )

    let senderPTag = document.createElement('p');
    senderPTag.setAttribute("class","nm")

    let dateTextPTag = document.createElement('p');
    dateTextPTag.setAttribute("class", "text-small mb-0 text-white")

    let messageText = document.createTextNode(`${content}`);
    let senderName = document.createTextNode(`${sender}`);
    let dateText = document.createTextNode(`${timeString} | ${dateString}`);

    dateTextPTag.appendChild(dateText)
    senderPTag.appendChild(senderName)

    dateDiv.appendChild(dateTextPTag)
    contentDiv.appendChild(messageText)
    senderDiv.appendChild(senderPTag)

    messageDiv.appendChild(dateDiv)
    messageDiv.appendChild(contentDiv)
    messageDiv.appendChild(senderPTag)

    let breakTag1 = document.createElement('br')
    let breakTag2 = document.createElement('br')

    messagesSection.appendChild(messageDiv)
    messagesSection.appendChild(breakTag1)
    messagesSection.appendChild(breakTag2)

    body.append(messagesSection);
    
}

const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  

const formatDate = (date) =>{
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    return `${day}/${month}/${year}`;
}


module.exports = {formatAMPM, formatDate}