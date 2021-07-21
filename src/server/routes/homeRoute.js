import express from 'express'
import path from 'path'
const __dirname = path.resolve()

const router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/', 'client', 'views', 'home.html'))
})

export default router;