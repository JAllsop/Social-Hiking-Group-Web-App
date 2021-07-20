'use strict'

retrieveGroupMessages = async (groupID) =>{
    const response = await fetch('http://localhost:3000/messages/get-message');

    const jsonData = await response.json();
     
}