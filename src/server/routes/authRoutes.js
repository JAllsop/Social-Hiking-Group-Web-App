'use strict'

const path = require('path')
const express = require('express')
const loginService = require('../services/loginService')

const router = express.Router()

// defaults to sending login/registration page
router.get('/', (req, res) => {
  // redirect to home page if confirmed user already logged in via session
  if (req.session.isLoggedIn) {
    res.redirect(req.baseUrl + '/home')
  } else {
    res.sendFile(path.join(__dirname, '../../', 'client', 'views', 'login.html'))
  }
})

// Login call to check if user details are correct
router.post('/api/auth', async (req, res) => {
  // res.sendStatus(200)
  const { username, password } = req.body
  const authResult = await loginService.authoriseAccount(username, password)
  if (authResult !== 'valid') {
    // return error status and error reason
    res.status(400).json({ code: authResult })
  } else {
    // save log in status to session
    req.session.isLoggedIn = true
    // save username in session
    req.session.username = username
    // redirect to home page after log in
    // res.status().json({ code: authResult })
    res.redirect(301, req.baseUrl + '/home')
  }
})

// Return home page
router.get('/home', (req, res) => {
  // confirm user is logged in via session
  if (req.session.isLoggedIn) {
    res.sendFile(path.join(__dirname, '../../', 'client', 'views', 'home.html'))
  // respond with not found if user not logged in
  } else { res.status(404).json('not found') }
})

// // Register call to create user accouint
router.post('/api/register', async (req, res) => {

})

module.exports = router
