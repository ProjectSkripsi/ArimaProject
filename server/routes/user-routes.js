const express = require('express');
const router = express.Router();
const {isLogin} = require('../middlewares/auth')
const {signup, signin, getUser} = require('../controllers/user-controller')

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/getuser', isLogin, getUser)

module.exports = router;
