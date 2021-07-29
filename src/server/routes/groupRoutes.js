const express = require('express')
const path = require('path')

const groupService = require('../services/groupServices.js')

const router = express.Router()

const dummy = () => {
  return 1
}

router.get('/create-group', function (req, res) {
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'createGroup.html'))
})

router.get('/search-group', function (req, res) {
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'searchGroup.html'))
})

router.post('/add-group', async function (req, res) {
  await groupService.createGroup(req.body)
  groupService.addToGroup(req.session.username, req.body)
  res.redirect('/view/view-group')
})

router.get('/validate-groupName/:group_name', function (req, res) {
  groupService.isGroupNameAvailable(`${req.params.group_name}`, function (isNameTaken) {
    if (isNameTaken !== '') {
      res.send(true)
    } else res.send(false)
  })
})

router.get('/group-homePage', (req, res) => {
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'groupChat.html'))
})

router.get('/get-groupName', (req, res) => {
  groupService.getLast(function getGroupname (groupName) {
    res.send(groupName)
  })
})

router.get('/information', (req, res) => {
  res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'groupInformation.html'))
})

router.get('/groupList/:filter', function (req, res) {
  if (req.params.filter === 'groupName') {
    groupService.getGroupList(req.params.filter, function (nameList) {
      res.send(nameList)
    })
  }

  if (req.params.filter === 'generalLocation') {
    groupService.getGroupList(req.params.filter, function (locationList) {
      res.send(locationList)
    })
  }
})

module.exports = { router, dummy }
