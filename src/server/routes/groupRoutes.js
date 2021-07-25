import express from 'express'
import path from 'path'
const __dirname = path.resolve()

const router = express.Router()

import * as groupService from '../services/groupServices.js'

router.get('/create-group', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'createGroup.html'))
})

router.get('/search-group', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'searchGroup.html'))
})

router.get('/groupList/:filter', function (req,res) {
    if(req.params.filter === 'groupName') {
        groupService.getGroupList(req.params.filter,function(nameList) {
            res.send(nameList)            
        })
    }

    if(req.params.filter === 'generalLocation') {
        groupService.getGroupList(generalLocation,function(locationList) {
            res.send(locationList)            
        })
        
    }
})

export default router;