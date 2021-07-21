import express from 'express'
import path from 'path'
const __dirname = path.resolve()

const router = express.Router()

router.get('/create-group', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'createGroup.html'))
})

router.get('/search-group', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'searchGroup.html'))
})

export default router;