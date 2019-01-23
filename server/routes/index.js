const express = require('express');
const router = express.Router();
const user = require('./user-routes')
const agent = require('./agent-routes')
const product = require('./product-routes')
const distribution = require('./distribution-routes')

router.use('/api/users', user)
router.use('/api/agent', agent)
router.use('/api/product', product)
router.use('/api/distribution', distribution )

module.exports = router;
