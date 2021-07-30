const express = require('express')
const path = require('path')

const groupService = require('../services/groupServices.js')

const router = express.Router()

const dummy = () => {
  return 1
}

router.get('/create-group', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'createGroup.html'))
  // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/search-group', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'searchGroup.html'))
  // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.post('/add-group', async function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    await groupService.createGroup(req.body)
    groupService.addToGroup(req.session.username, req.body)
    // redirects to group's webpage to view newly created group details
    res.redirect(`/view/view-group:${req.body.groupName}`)
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/validate-groupName/:group_name', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    groupService.isGroupNameAvailable(`${req.params.group_name}`, function (isNameTaken) {
      if (isNameTaken !== '') {
        res.send(true)
      } else res.send(false)
    })
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/group-homePage', (req, res) => {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'groupChat.html'))
  // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/get-groupName', (req, res) => {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    groupService.getLast(function getGroupname (groupName) {
      res.send(groupName)
    })
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/information', (req, res) => {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'groupInformation.html'))
  // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/groupList/:filter', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
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
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

module.exports = { router, dummy }
