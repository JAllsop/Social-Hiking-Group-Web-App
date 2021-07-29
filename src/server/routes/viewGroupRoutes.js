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

router.get('/fetch-details', function (req, res) {
  viewGroup.getGroupDetails(function (groupDetails) {
    res.send(groupDetails)
  })
})

// /fetch-details
module.exports = router
