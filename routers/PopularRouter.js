const express = require('express')
const { Getpop, Createpop, Deletepop, UpdatePop } = require('../controllers/PopularController')
const router = express.Router()


router.get('/popular', Getpop)
router.post('/popular', Createpop)
router.put('/popular/:id', UpdatePop)
router.delete('/popular/:id', Deletepop)


module.exports = router