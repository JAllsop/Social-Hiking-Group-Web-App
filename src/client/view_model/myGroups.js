'use strict'

import('../model/myGroupsModel.js').then(({ fetchMyGroups }) => {
  
  fetchMyGroups()
    .then(function (response) {
      return response
    })
    .then(function (groups) {
      const userList = document.getElementById('myGroups')
      userList.innerHTML = ''

      // Iterate through all students
      groups.forEach(function (group) {
        // Create a new list entry
        const li = document.createElement('LI')
        const liText = document.createTextNode(`${group.groupName}`)// : ${user.email}

        // Append the class to the list element
        li.className += 'user'

        // Append list text to list item and list item to list
        li.appendChild(liText)
        userList.appendChild(li)
      })
    })
})
