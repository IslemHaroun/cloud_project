const express = require("express");
const router = express.Router();
const systemController = require("../controllers/systemController.js");
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');


// Route pour l'insertion des données dans la table 'system'
router.post("/insert",jwtMiddleware, systemController.insertSystem);

router.get("/os", systemController.getAllVersions);

// Route pour supprimer une version de système
router.delete("/delete/:versionId", jwtMiddleware, systemController.deleteVersion);

// Route pour mettre à jour une version de système
router.put("/update/:versionId", jwtMiddleware, systemController.updateVersion);

module.exports = router;
