import assert from "assert"
import retrieveGroupMessages from "../../../src/client/model/chat-functions";
jest.mock("../../../mocks/chat-function")

describe("retrieve messages with group ID of 1", ()=>{
    let messageArray = []
    const dummyDate = new Date(2018, 11, 24, 10, 33);
    let messageOneGroupOne = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":1}
    let messageTwoGroupOne = {"messageID":1, "content":"Sino sent another message with someone's account", "senderID":3,"dateTime":dummyDate, "groupID":1}
    messageArray.push(messageOneGroupOne,messageTwoGroupOne)

    let results = []
    

    retrieveGroupMessages(1)
    .then(data =>{
        results = data
    })

    assert(results,messageArray)

})

describe("retrieve messages with group ID of 3", ()=>{
    let messageArray = []
    const dummyDate = new Date(2018,11,24,10,33)

    let messageOneGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}
    let messageTwoGroupThree = {"messageID":1, "content":"Sino sent a message", "senderID":2,"dateTime":dummyDate, "groupID":3}
    messageArray.push(messageOneGroupThree, messageTwoGroupThree)

    let results = []

    retrieveGroupMessages(3)
    .then(data =>{
        results = data
    })

    assert(results,messageArray)

})