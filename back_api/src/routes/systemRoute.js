const express = require("express");
const router = express.Router();
const systemController = require("../controllers/systemController.js");
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');


// Route pour l'insertion des données dans la table 'system'
router.post("/insert",jwtMiddleware, systemController.insertSystem);

module.exports = router;
