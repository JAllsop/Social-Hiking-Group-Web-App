'use strict'
const MessageService = require('../services/message-service').default
class AppSockets {
  connection (client) {
    client.on('sendTextMessage', async (message, groupID) => {
      const req = { messageContent: message.messageText, date: message.messageDate, sender: message.senderID }
      client.broadcast.to(groupID).emit('message', req)
      const res = []
      const results = await MessageService.saveMessage(res, req)
      console.log(results)
    })

    client.on('retrieveGroupMessages', async (groupID) => { // GroupID is equivalent to Group Name.
      const req = { groupID: groupID }
      const res = {}
      MessageService.getGroupMessages(res, req)
        .then((res) => {
          client.emit('groupMessage', res)
        })
    })
    client.on('subscribe', (groupID) => {
      client.join(groupID)
    })

    client.on('initiateVote', () => {

    })
  }
}

module.exports = new AppSockets()
