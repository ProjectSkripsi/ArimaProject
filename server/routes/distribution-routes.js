const express = require('express')
const router = express.Router()
const {createDist, getAllDist} = require('../controllers/distribution-controller')

router.post('/', createDist)
router.get('/', getAllDist)

module.exports = router