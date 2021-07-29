'use strict'

const express = require('express')
const path = require('path')

const viewGroup = require('../services/viewGroup.js')

const router = express.Router()

router.get('/view-group', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'starter.html'))
})

router.get('/getInfo', function (req, res) {
  res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'groupPage.html'))
})

router.get('/fetch-details::groupName', function (req, res) {
  const groupName = req.params.groupName
  viewGroup.getGroupDetails(function (groupDetails) {
    console.log(groupDetails)
    res.send(groupDetails)
  }
  , groupName)
})

// /fetch-details
module.exports = router
