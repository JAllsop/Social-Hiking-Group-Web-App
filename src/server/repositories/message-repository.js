import db from "./db.js"

class MessageRepository {
    // ...    
    constructor() {
        
    }


async getGroupMessages(req,res){

       //Make a query to the database.
        db.pools

        .then((pool)=>{
           return pool.request()
           .query(`SELECT * FROM dbo.MESSAGES WHERE groupID=${req.groupID}`);

        })
        .then(result =>{
            res.send(result);
        })
        // If there's an error, return that with some description.
        .catch(err=>{
            res.send({Error:err})
        })
}

async postGroupMessage(req,res){
        db.pools

        .then((pool)=>{
            return pool.request()
            .query(`INSERT INTO dbo.MESSAGES(groupID,sender,context,dateSent)`+
            `VALUES(${req.groupID}, ${req.senderID}, ${req.messageContent}, ${req.dateSent})`)
        })
        .then(result=>{
            res.send(result)
        })
        .catch(err =>{
            res.send({Error:err})
        })
}

};

export default new MessageRepository();