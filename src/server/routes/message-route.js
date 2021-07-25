const express = require('express');
// controllers
const MessageService = require('../services/message-service');

const router = express.Router();

router
  .post('/save', MessageService.postGroupMessage)
  .get('/get-messages', MessageService.getGroupMessages)
  

  module.exports = router;