import express from 'express'
import path from 'path'

import * as groupService from '../services/groupServices.js'

const __dirname = path.resolve()

const router = express.Router()

router.get('/create-group', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'createGroup.html'))
})

router.get('/search-group', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'searchGroup.html'))
})

router.post('/add-group', function (req, res) {
    groupService.createGroup(req.body)
    //res.redirect('/groupchat/'+`${req.body.groupName}`)
    res.redirect('/group/group-homePage')
})

router.get('/validate-groupName/:group_name', function (req, res) {
  groupService.isGroupNameAvailable(`${req.params.group_name}`,function(isNameTaken){
        if (isNameTaken) {
            res.send(true)
        }
        else res.send(false)
   })

})

router.get('/group-homePage', (req,res)=>{
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'groupChat.html'))
})

router.get('/get-groupName',(req,res)=>{
    groupService.getLast(function getGroupname(groupName) {
        res.send(groupName)
        console.log(groupName)
    })
})

router.get('/information',(req,res)=>{
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'groupInformation.html'))
})

export default router;