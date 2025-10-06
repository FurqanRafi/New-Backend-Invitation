const express = require('express')
const router = express.Router()
const { GetHero, CreateHero, DeleteHero, UpdateHero } = require('../controllers/HeroController')

router.get('/hero', GetHero)
router.post('/hero', CreateHero)
router.put('/hero/:id', UpdateHero)
router.delete('/hero/:id', DeleteHero)

module.exports = router