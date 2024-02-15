// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Route pour l'authentification
router.post('/login', authController.authenticate);

module.exports = router;
