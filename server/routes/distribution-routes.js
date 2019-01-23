const express = require('express')
const router = express.Router()
const {createDist} = require('../controllers/distribution-controller')

router.post('/', createDist)

module.exports = router