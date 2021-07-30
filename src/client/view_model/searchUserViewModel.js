'use strict'

import('../model/searchUserModel.js').then(({ fetchUserList }) => {
    document.querySelector('#search-text').addEventListener('input', () => {
        fetchUserList()
        .then(function (data) {
            // filtering based on selected filter type
            switch (document.getElementById('categories').value) {
            case ('Username'):
                data = data.filter(user =>
                user.username.toLowerCase().startsWith(document.getElementById('search-text').value.toLowerCase()))
                break
            case ('Email Address'):
                data = data.filter(user =>
                user.email.toString().toLowerCase().startsWith(document.getElementById('search-text').value.toLowerCase()))
                break
            }
        
            const userList = document.getElementById('userList')
            userList.innerHTML = ''
        
            // Iterate through all students
            data.forEach(function (user) {
            // Create a new list entry
            const li = document.createElement('LI')
            const liText = document.createTextNode(`${user.username}`)//: ${user.email}
        
            // Append the class to the list element
            li.className += 'user'
        
            // Append list text to list item and list item to list
            li.appendChild(liText)
            userList.appendChild(li)
            })
        })
    }, false)

    fetchUserList()
    .then(function(users){
        console.log(users)
        const userList = document.getElementById('userList')
        userList.innerHTML = ''
    
        // Iterate through all students
        users.forEach(function (user) {
        // Create a new list entry
        const li = document.createElement('LI')
        const liText = document.createTextNode(`${user.username}`)//: ${user.email}
    
        // Append the class to the list element
        li.className += 'user'
    
        // Append list text to list item and list item to list
        li.appendChild(liText)
        userList.appendChild(li)
        })
    })
})