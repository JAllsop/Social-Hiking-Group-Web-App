const express = require('express')
const path = require('path')

const groupService = require('../services/groupServices.js')

const router = express.Router()

router.get('/create-group', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'createGroup.html'))
})

router.get('/search-group', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'searchGroup.html'))
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

module.exports = router
