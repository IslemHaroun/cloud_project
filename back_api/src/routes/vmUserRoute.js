const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');
const vmUserController = require('../controllers/vmUserController');


router.post('/insert-info-vm', vmUserController.insertInfoVm);


module.exports = router;
