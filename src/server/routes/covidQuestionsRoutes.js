// 'use strict'

const express = require('express')
const path = require('path')

// const viewGroup = require('../services/viewGroup.js')

const router = express.Router()

router.get('/getQuestions', function (req, res) {
    console.log('Here')
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'covidQuestions.html'))
  })

  module.exports = router