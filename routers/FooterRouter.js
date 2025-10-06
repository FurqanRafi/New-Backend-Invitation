const express = require ('express')
const { GetFooter, CreateFooter, UpdateFooter, DeleteFooter } = require('../controllers/FooterController')
const router = express.Router()


router.get('/footer', GetFooter)
router.post('/footer', CreateFooter)
router.put('/footer/:id',UpdateFooter)
router.delete('/footer/:id', DeleteFooter)


module.exports = router