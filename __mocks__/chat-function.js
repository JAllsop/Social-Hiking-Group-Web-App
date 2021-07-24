retrieveGroupMessages = (groupID) =>{
    
    let dummyDate = new Date
    messageArray = []
    messageOneGroupOne = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":1}
    messageTwoGroupOne = {"messageID":1, "content":"Sino sent another message with someone's account", "senderID":3,"dateTime":dummyDate, "groupID":1}

    messageOneGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}
    messageTwoGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}

    if(groupID === 1){
        messageArray.push(messageOneGroupOne, messageTwoGroupOne)
    }
    if(groupID === 3){
        messageArray.push(messageOneGroupThree, messageTwoGroupThree)
    }

    return Promise.resolve(messageArray)

}