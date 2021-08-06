'use strict'

document.addEventListener('DOMContentLoaded', function () {
  console.log('Members')
  fetch('/group/groupName') // eslint-disable-line
    .then(function (response) {
      return response.json()
    })
    .then(function (name) {
      const groupname = name[0].Groupname
      getUsers(groupname)
    })
}, false)

function getUsers (groupName) {
  fetch(`/view/fetch-details:${groupName}`) // eslint-disable-line
    .then(function (response) {
      return response.json()
    })
    .then(function (users) {
      console.log('List')
      console.log(users)
      console.log(users[1])
      const username = users[1]

      const userList = document.getElementById('members')
      userList.innerHTML = ''

      // Iterate through all usernames
      for (let i = 0; i < username.length; ++i) {
      // Create a new list entry
        const li = document.createElement('LI')
        // onfocusout='javascript:hide()'
        const temp = "<a href ='#'>" + `${username[i].username}` + '</a>'
        li.innerHTML = temp

        // Append the class to the list element
        li.className += 'user'

        // Append list text to list item and list item to list
        userList.appendChild(li)
      }
    })
}
