const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const User = require('../models/Users');
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');


router.get('/',jwtMiddleware, userController.getAllUsers);

router.get('/:id',jwtMiddleware, userController.getUserById);

router.put('/:id/update-credit', userController.updateCredit);


module.exports = router;
