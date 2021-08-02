
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
          const temp = "<a href ='#'>" + `${user.username}` + '</a>'
          li.innerHTML = temp

          // Append the class to the list element
          li.className += 'user'

          // Append list text to list item and list item to list
          userList.appendChild(li)
        })
      })
  }, false)

  fetchUserList()
    .then(function (users) {
      const userList = document.getElementById('userList')
      userList.innerHTML = ''

      // Iterate through all students
      users.forEach(function (user) {
        // Create a new list entry
        const li = document.createElement('LI')
        // onfocusout='javascript:hide()'
        const temp = "<a href ='javascript:void(0)' onclick='inviteUser(this.text)'>" + `${user.username}` + '</a>'
        li.innerHTML = temp

        // Append the class to the list element
        li.className += 'user'

        // Append list text to list item and list item to list
        userList.appendChild(li)
      })
    })
})

function show () {
  document.getElementById('addUser').style.display = 'block'
}

function hide () {
  document.getElementById('addUser').style.display = 'none'
}

// --- For checking if user already in the group ---

// function checkUser(username){
//   fetch('/group/check-user/' + `${username}`)
//   .then(function (response) {
//     return response.json()
//   })
//   .then(function (_value){
//     if(_value === true) {inviteUser(_value)}
//     else {
//       console.log('User already part of group')
//     }
//   }
// }

function inviteUser (username) {
  alert('Invite sent')

  fetch('/group/add-user', {

    // Adding method type
    method: 'POST',

    // Adding body or contents to send
    body: JSON.stringify({
      username: `${username}`
      // groupName: '',
    }),

    // Adding headers to the request
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
}
