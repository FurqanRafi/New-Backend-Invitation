const express = require ('express')
const { GetNavbar, CreateNavbar, UpdateNavbar, DeleteNavbar } = require('../controllers/NavbarController')
const router = express.Router()


router.get('/navbar', GetNavbar)
router.post('/navbar', CreateNavbar)
router.put('/navbar/:id', UpdateNavbar)
router.delete('/navbar/:id', DeleteNavbar)

module.exports = router
