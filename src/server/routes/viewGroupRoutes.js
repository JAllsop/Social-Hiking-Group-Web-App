'use strict'

const express = require('express')
const path = require('path')
const fs = require('fs')

const viewGroup = require('../services/viewGroup.js')

const router = express.Router()

// added wild card to specify groupName when sending groupPage file
router.get('/view-group::groupName', function (req, res) {
  const groupName = req.params.groupName
  const pagePath = path.join(__dirname, '../', '../', 'client', 'views', 'groupPage.html')

  /*
  // This is a HACK and needs to be changed once the client files are properly separated into the agreed upon model
  */
  // reads groupPage.html file and stores in string
  let data = fs.readFileSync(pagePath, 'utf8')
  if (data) {
    // replaces groupName constant with the created groupName (look at groupName.html for details)
    data = data.replace('groupNamePlaceholder', groupName)

    // sends the edited groupPage.html to client
    res.send(data)
  }
})

// added wild card to specify the name of the group when retrieving group details
router.get('/fetch-details::groupName', function (req, res) {
  const groupName = req.params.groupName
  viewGroup.getGroupDetails(function (groupDetails) {
    res.send(groupDetails)
  }
  , groupName)
})

// /fetch-details
module.exports = router
