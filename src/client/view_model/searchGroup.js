
document.addEventListener('DOMContentLoaded', function() {
    fetchGroups()
}, false);

function fetchGroups(){
  fetch('/group/groupList')
  .then(function(response){
      return response.json()
  })
  .then(function(_value){
     makeTable(_value)
  })
}


function makeTable(groups) {

    let GroupNames = []
    let GroupLocation = []

    let tableLength = groups.length

    let groupsTable = document.createElement('table')
    groupsTable.setAttribute('id','groupsTable')

    let headerRow = document.createElement('tr')
    headerRow.setAttribute('class','header')

    let header_1 = document.createElement('th')
    header_1.setAttribute('style','width:70%')
    header_1.innerHTML = 'Name'
    headerRow.appendChild(header_1)

    let header_2 = document.createElement('th')  
    header_2.setAttribute('style','width:70%')
    header_2.innerHTML = 'Location'
    headerRow.appendChild(header_2)

    groupsTable.appendChild(headerRow)


    for (i = 0; i < tableLength; ++i) {

        let tableRows = document.createElement('tr')

        GroupNames[i] = "<a href = '#'>" + groups[i].groupName + "</a>"
        GroupLocation[i] = groups[i].generalLocation

        let nameCol = document.createElement('td')
        nameCol.innerHTML = GroupNames[i]

        let locationCol = document.createElement('td')
        locationCol.innerHTML = GroupLocation[i]

        tableRows.appendChild(nameCol)
        tableRows.appendChild(locationCol)  
        
        groupsTable.appendChild(tableRows)
    
      }

    document.getElementsByTagName('body')[0].appendChild(groupsTable)
}

function searchFunction() {

    let input = document.getElementById("search-text")
    let filter = input.value.toUpperCase()
    let table = document.getElementById("groupsTable")
    let tr = table.getElementsByTagName("tr")
    var td

    for (i = 0; i < tr.length; i++) {

      switch (document.getElementById('options').value) {
          case ('groupName'):
            td = tr[i].getElementsByTagName("td")[0]
              break;
          case ('groupLocation'):
            td = tr[i].getElementsByTagName("td")[1]
              break;
      }
      if (td) {

        textValue = td.textContent || td.innerText

        if (textValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = ""
        } else {
          tr[i].style.display = "none"
        }
      }       
    }
}
