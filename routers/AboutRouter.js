const express = require('express')
const { GetAbout, CreateAbout, DeleteAbout, UpdateAbout } = require('../controllers/AboutController')
const router = express.Router()


router.get('/about', GetAbout)
router.post('/about', CreateAbout)
router.put('/about/:id', UpdateAbout)
router.delete('/about/:id', DeleteAbout)

module.exports = router