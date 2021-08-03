'use strict'

const e = require('cors')
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
    await groupService.addToGroup(req.session.username, req.body)
    res.redirect('/group/group-homePage')
    // redirects to group's webpage to view newly created group details
    // res.redirect(`/view/view-group:${req.body.groupName}`)
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/validate-groupName/:group_name', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    groupService.isGroupNameAvailable(`${req.params.group_name}`, function (isNameTaken) {
      if (isNameTaken) { res.send(true) } else { res.send(false) }
    })
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

router.get('/group-homePage', (req, res) => {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../', '../', 'client', 'views', 'chatarea.html'))
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

router.get('/groupList', function (req, res) {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    groupService.getGroupList(function (groups) {
      res.send(groups)
    })
    // respond with not found if user not logged in
  } else { res.status(404).json('You need to be Logged In To Access This Page') }
})

// router.get('/check-user/:username', function (req, res) {
//   groupService.checkUser(req.params.username, function (isPartOfGroup) {
//     if (isPartOfGroup) { res.send(true) } else { res.send(false) }
//   })
// })

router.post('/add-user', function (req, res) {
  const groupname = 'groupHolder'
  groupService.addToInvites(req.body.username, groupname)
  res.redirect('/group/send-invitation/' + `${req.body.username}`)
})

router.get('/send-invitation/:username', function (req, res) {
  const groupname = 'groupHolder'
  groupService.createInvitation(req.params.username, groupname)
})
module.exports = { router, dummy }
