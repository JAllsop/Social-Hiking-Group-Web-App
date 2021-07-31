const dbQuery = require('./dbQuery').dbQuery

class MessageRepository {
  // ...
  constructor () { // eslint-disable-line
  }

  async getGroupMessages (req, res) {
    try {
      const messages = await dbQuery(`SELECT * FROM dbo.MESSAGES WHERE groupID=${req.groupID}`)
      res.send(messages)
    } catch (err) {
      console.log(err)
      res.send({ Error: err })
    }
  }

  async postGroupMessage (req, res) {
    try {
      const res = await dbQuery('INSERT INTO dbo.MESSAGES(Content,messageDate,SenderID,GroupID)' +
        `VALUES(${req.messageContent},${req.dateSent},${req.senderID},${req.groupID})`)
      res.send(res)
    } catch (err) {
      console.log(err)
      res.send({ Error: err })
    }
  }
};

module.exports = new MessageRepository()
