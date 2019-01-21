const express = require('express');
const router = express.Router();
const {addAgent, findAgent, editAgent, deleteAgent, findAll} = require('../controllers/agen-controller')

router.post('/add', addAgent)
router.get('/:id', findAgent)
router.put('/:id', editAgent)
router.delete('/:id', deleteAgent)
router.get('/', findAll)

module.exports = router