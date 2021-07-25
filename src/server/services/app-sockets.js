'use strict'
const MessageService = require('../services/message-service').default;
class AppSockets{
     connection = function(client){

        client.on("sendTextMessage", (message) => {
            req = {"messageContent":message.messageText, "date":message.messageDate, "sender":message.senderID}
            res = []
            MessageService.saveMessage(res,req)
            .then((value)=> console.log(value))
           
         });
   
         client.on("retrieveGroupMessages", (groupID)=>{
           req = {"groupID":groupID}
           res = {}
           MessageService.getGroupMessages(res,req)
           .then((value)=> res = value)
            client.emit("groupMessage", res)
           
         });
         client.on("subscribe", (groupID) => {
        
            client.join(groupID);
          });


    }

}

module.exports = new AppSockets();