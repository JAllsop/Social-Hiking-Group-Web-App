'use strict'

import { response } from "express"

retrieveGroupMessages = async (groupID) =>{
    let results = []
    data = {"groupID": groupID}
    const response = await fetch('http://localhost:3000/messages/get-messages',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        .then(response=>response.json())
        .then(data => {
           results = data
        })
        .catch((error)=>console.error('Error:', error))
    })   
}

export default retrieveGroupMessages