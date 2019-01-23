const express = require('express');
const router = express.Router();
const { addProduct, findAll, findProduct, editProduct, deleteProduct} = require('../controllers/product.controller')

router.post('/', addProduct)
router.get('/', findAll)
router.get('/:id', findProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteProduct)

module.exports = router