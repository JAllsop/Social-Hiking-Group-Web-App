'use strict'
import { io } from 'socket.io-client'
// import retrieveGroupMessages from '../model/chat-functions'
import { formatAMPM, formatDate } from './chat-formatting'

const chatForm = document.getElementById('group-chat') // message area form.

const socket = io('http://localhost:3000', { transports: ['websocket'] })
socket.on('connection', () => {
  console.log('connection made')
})
socket.on('error', console.error)
// socket.on('retrieveGroupMessages', (groupID) => {
//   retrieveGroupMessages(groupID)
//     .then(data => console.log(data)) // display messages for respective groups.
// })
socket.on('message', (data) => {
  console.log(data)
  displayRecievedMessage(data.sender, data.content, data.date)
})
socket.on('subscribe', (groupID) => { // groupID is equivalent to group name in this case.
  socket.emit('groupID', groupID)
})

chatForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const msg = e.target.elements.content.value
  const dateObject = new Date()
  const sender = 'Sino Mazibuko'
  displaySentMessage(sender, msg, dateObject)

  socket.on('sendTextMessage', (data) => {
    data = { sender: `${sender}`, content: `${msg}`, date: dateObject }
  })
  e.target.elements.content.value = ''
  e.target.elements.content.value.focus()
})

const displaySentMessage = (sender, content, dateTimeObject) => {
  const timeString = formatAMPM(dateTimeObject)
  const dateString = formatDate(dateTimeObject)
  const messagesSection = document.getElementById('message-area')
  const messageDiv = document.createElement('div')
  messageDiv.setAttribute('class', 'ml-auto position-relative chat-right text-white')

  const senderDiv = document.createElement('div')
  senderDiv.setAttribute('class', 'namepadding')

  const contentDiv = document.createElement('div')
  contentDiv.setAttribute('class', 'd-flex align-items-center')

  const dateDiv = document.createElement('div')
  dateDiv.setAttribute('class', 'position-absolute bottom-0 end-0')

  const senderPTag = document.createElement('p')
  senderPTag.setAttribute('class', 'nm')

  const dateTextPTag = document.createElement('p')
  dateTextPTag.setAttribute('class', 'text-small mb-0 text-white')

  const messageText = document.createTextNode(`${content}`)
  const senderName = document.createTextNode(`${sender}`)
  const dateText = document.createTextNode(`${timeString} | ${dateString}`)

  dateTextPTag.appendChild(dateText)
  senderPTag.appendChild(senderName)

  dateDiv.appendChild(dateTextPTag)
  contentDiv.appendChild(messageText)
  senderDiv.appendChild(senderPTag)

  messageDiv.appendChild(dateDiv)
  messageDiv.appendChild(contentDiv)
  messageDiv.appendChild(senderPTag)

  const breakTag1 = document.createElement('br')
  const breakTag2 = document.createElement('br')

  messagesSection.appendChild(messageDiv)
  messagesSection.appendChild(breakTag1)
  messagesSection.appendChild(breakTag2)

  document.body.append(messagesSection)
}

const displayRecievedMessage = (sender, content, dateTimeObject) => {
  const timeString = formatAMPM(dateTimeObject)
  const dateString = formatDate(dateTimeObject)
  const messagesSection = document.getElementById('message-area')
  const messageDiv = document.createElement('div')
  messageDiv.setAttribute('class', 'mr-auto position-relative chat-left text-white')

  const senderDiv = document.createElement('div')
  senderDiv.setAttribute('class', 'namepadding')

  const contentDiv = document.createElement('div')
  contentDiv.setAttribute('class', 'd-flex align-items-center')

  const dateDiv = document.createElement('div')
  dateDiv.setAttribute('class', 'position-absolute bottom-0 end-0')

  const senderPTag = document.createElement('p')
  senderPTag.setAttribute('class', 'nm')

  const dateTextPTag = document.createElement('p')
  dateTextPTag.setAttribute('class', 'text-small mb-0 text-white')

  const messageText = document.createTextNode(`${content}`)
  const senderName = document.createTextNode(`${sender}`)
  const dateText = document.createTextNode(`${timeString} | ${dateString}`)

  dateTextPTag.appendChild(dateText)
  senderPTag.appendChild(senderName)

  dateDiv.appendChild(dateTextPTag)
  contentDiv.appendChild(messageText)
  senderDiv.appendChild(senderPTag)

  messageDiv.appendChild(dateDiv)
  messageDiv.appendChild(contentDiv)
  messageDiv.appendChild(senderPTag)

  const breakTag1 = document.createElement('br')
  const breakTag2 = document.createElement('br')

  messagesSection.appendChild(messageDiv)
  messagesSection.appendChild(breakTag1)
  messagesSection.appendChild(breakTag2)

  document.body.append(messagesSection)
}
