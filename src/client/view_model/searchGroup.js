
document.addEventListener('DOMContentLoaded', function () {
  fetchGroups()
}, false)

function fetchGroups () {
  fetch('/group/groupList')
    .then(function (response) {
      return response.json()
    })
    .then(function (_value) {
      makeTable(_value)
    })
}

function makeTable (groups) {
  const GroupNames = []
  const GroupLocation = []

  const tableLength = groups.length

  const groupsTable = document.createElement('table')
  groupsTable.setAttribute('id', 'groupsTable')

  const headerRow = document.createElement('tr')
  headerRow.setAttribute('class', 'header')

  const header_1 = document.createElement('th')
  header_1.setAttribute('style', 'width:70%')
  header_1.innerHTML = 'Name'
  headerRow.appendChild(header_1)

  const header_2 = document.createElement('th')
  header_2.setAttribute('style', 'width:70%')
  header_2.innerHTML = 'Location'
  headerRow.appendChild(header_2)

  groupsTable.appendChild(headerRow)

  for (let i = 0; i < tableLength; ++i) {
    const tableRows = document.createElement('tr')

    GroupNames[i] = "<a href = '/group/group-homePage'>" + groups[i].groupName + '</a>'
    GroupLocation[i] = groups[i].generalLocation

    const nameCol = document.createElement('td')
    nameCol.innerHTML = GroupNames[i]

    const locationCol = document.createElement('td')
    locationCol.innerHTML = GroupLocation[i]

    tableRows.appendChild(nameCol)
    tableRows.appendChild(locationCol)

    groupsTable.appendChild(tableRows)
  }

  document.getElementsByTagName('body')[0].appendChild(groupsTable)
}

function searchFunction () {
  const input = document.getElementById('search-text')
  const filter = input.value.toUpperCase()
  const table = document.getElementById('groupsTable')
  const tr = table.getElementsByTagName('tr')
  let td

  for (let i = 0; i < tr.length; i++) {
    switch (document.getElementById('options').value) {
      case ('groupName'):
        td = tr[i].getElementsByTagName('td')[0]
        break
      case ('groupLocation'):
        td = tr[i].getElementsByTagName('td')[1]
        break
    }
    if (td) {
      const textValue = td.textContent || td.innerText

      if (textValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = ''
      } else {
        tr[i].style.display = 'none'
      }
    }
  }
}
