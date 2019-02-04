const express = require('express')
const router = express.Router()
const {createDist, getAllDist, deleteDist} = require('../controllers/distribution-controller')

router.post('/', createDist)
router.get('/', getAllDist)
router.delete('/:id', deleteDist)

module.exports = router