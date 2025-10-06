const express = require ('express')
const { Getcards, Createcards, Updatecards, DeleteCards } = require('../controllers/CardsController')
const router = express.Router()


router.get('/card', Getcards)
router.post('/card', Createcards)
router.put('/card/:id', Updatecards)
router.delete('/card/:id', DeleteCards)

module.exports = router