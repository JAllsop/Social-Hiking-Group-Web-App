const dbQuery = require('./dbQuery').dbQuery

class MessageRepository {
    // ...    
    constructor() {
        
    }


async getGroupMessages(req,res){

    try{
          const messages = await dbQuery(`SELECT * FROM dbo.MESSAGES WHERE groupID=${req.groupID}`)
          res.send(messages)
    }catch(err){
        console.log(err)
        res.send({Error:err})

    }
}

async postGroupMessage(req,res){
    try{
        const response = await dbQuery(`INSERT INTO dbo.MESSAGES(groupID,sender,context,dateSent)`+
        `VALUES(${req.groupID}, ${req.senderID}, ${req.messageContent}, ${req.dateSent})`)
        res.send(response)

    }catch(err){
        console.log(err)
        res.send({Error:err})

    }     
}

};

module.exports = new MessageRepository();