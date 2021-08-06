'use strict'

const express = require('express')

const applicationService = require('../services/applicationService.js')
const logService = require('../services/logging-service')

const router = express.Router()

router.get('/api/apply/:groupID', async function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    const username = req.session.username
    const operationDate = new Date()
    applicationService.addToGroup(username, req.params.groupID)
    // Capture the activity for logging
    logService.logOperation(username, 'Added user to the group', operationDate)
    // redirects to group's webpage to view newly created group details
    res.redirect('/group/search-group')
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/api/check/:groupID', async function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    applicationService.hasApplied(`${req.session.username}`, `${req.params.groupID}`, function (hasApplied) {
      if (hasApplied) { res.send(true) } else { res.send(false) }
    })
    // res.redirect('/group/search-group')
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

module.exports = router
