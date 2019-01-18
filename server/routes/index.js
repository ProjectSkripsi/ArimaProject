const express = require('express');
const router = express.Router();
const user = require('./user-routes')

router.use('/api/users', user)

module.exports = router;
