'use strict'

const path = require('path')
const express = require('express')
const userService = require('../services/userService')
const router = express.Router()

// loading search page
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../', 'client', 'views', 'searchUser.html'))
})

// fetching users
router.get('/api/list', function (req, res) {
  userService.getAll()
    .then((data) => {
      res.json(data)
    })
})

const dummy = () => {
  return 1
}

module.exports =
{
  dummy: dummy,
  router: router
}
