const express = require('express');
const router = express.Router();
const user = require('./user-routes')
const agent = require('./agent-routes')

router.use('/api/users', user)
router.use('/api/agent', agent)

module.exports = router;
