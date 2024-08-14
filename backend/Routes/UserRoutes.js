const UserController = require('../controllers/UserController');
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/',auth,UserController.getUsers);
router.post('/user',UserController.postUsers);
router.post('/login',UserController.login);

module.exports = router;
