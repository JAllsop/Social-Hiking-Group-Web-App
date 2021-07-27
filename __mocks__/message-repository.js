postGroupMessage = (res, req) =>{
    let message = req
    console.log(message)
    res = "OK"
    return Promise.resolve(res)
}

getGroupMessages = (res,req) =>{
    let groupidAndSenderID = req
    groupID = groupidAndSenderID.groupID
    console.log(groupidAndSenderID)
    let dummyDate = new Date()
    let messageArray = []
    let messageOneGroupOne = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":1}
    let messageTwoGroupOne = {"messageID":1, "content":"Sino sent another message with someone's account", "senderID":3,"dateTime":dummyDate, "groupID":1}

    let messageOneGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}
    let messageTwoGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}

    if(groupID === 1){
        messageArray.push(messageOneGroupOne, messageTwoGroupOne)
        res = messageArray
    }
    if(groupID === 3){
        messageArray.push(messageOneGroupThree, messageTwoGroupThree)
        res = messageArray
    }

    return Promise.resolve(res)
}

module.exports = [postGroupMessage, getGroupMessages]