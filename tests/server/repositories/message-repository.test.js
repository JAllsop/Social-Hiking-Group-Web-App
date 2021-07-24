import assert from "assert"

describe("Post message and await an OK response", ()=>{
    let messageOneGroupOne = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":1}

    let results = []
    let outcome = []

    postGroupMessage(results, messageOneGroupOne)
    .then(data => {
        outcome = data
    })

    assert(outcome, "OK")


})

describe("Retrieve message with group ID of 1", ()=>{

    let messageArray = []
    const dummyDate = new Date(2018, 11, 24, 10, 33);
    let messageOneGroupOne = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":1}
    let messageTwoGroupOne = {"messageID":1, "content":"Sino sent another message with someone's account", "senderID":3,"dateTime":dummyDate, "groupID":1}
    messageArray.push(messageOneGroupOne,messageTwoGroupOne)

    let results = []
    let testResults = []
    
    getGroupMessages(results,1)
    .then(data =>{
        testResults = data
    })

    assert (testResults, messageArray)


})

describe("Retrieve message with group ID of 3", ()=>{
    let messageArray = []
    const dummyDate = new Date(2018,11,24,10,33)

    let messageOneGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}
    let messageTwoGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}
    messageArray.push(messageOneGroupThree, messageTwoGroupThree)

    let results = []
    let testResults = []

    getGroupMessages(results,3)
    .then(data =>{
        testResults = data
    })

    assert (testResults, messageArray)
})