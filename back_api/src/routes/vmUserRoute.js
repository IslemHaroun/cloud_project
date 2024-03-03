const express = require('express');
const router = express.Router();
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');
const vmUserController = require('../controllers/vmUserController');


router.post('/insert-info-vm',jwtMiddleware, vmUserController.insertInfoVm);

router.get('/:id_user/get-info-vm',jwtMiddleware, vmUserController.getInfoVmByIdUser);
module.exports = router;
