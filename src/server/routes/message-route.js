import express from 'express';
// controllers
import MessageService from '../services/message-service';

const router = express.Router();

router
  .post('/save', MessageService.saveMessage)
  .get('/get-messages', MessageService.getGroupMessages)
  

export default router;