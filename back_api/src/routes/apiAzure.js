const express = require("express");
const router = express.Router();
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');
const { exec } = require('child_process');
require('dotenv').config();


const azureId = process.env.AZURE_SUBSCRIPTION_ID;
const azureClient = process.env.AZURE_CLIENT_ID;
const azureClientSecret = process.env.AZURE_CLIENT_SECRET;
const azureTenantId = process.env.AZURE_TENANT_ID;
// Route pour démarrer l'exécution du script Azure
router.post("/start", (req, res) => {
    // Exécutez les commandes d'export des variables d'environnement
    exec( `AZURE_SUBSCRIPTION_ID=${azureId} AZURE_CLIENT_ID=${azureClient} AZURE_CLIENT_SECRET=${azureClientSecret} AZURE_TENANT_ID=${azureTenantId} node azure_api_management/index.js`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Erreur lors de l'exécution du script : ${error.message}`);
            return res.status(500).json({ message: "Erreur lors de l'exécution du script." });
        }
        if (stderr) {
            console.error(`Erreur de sortie : ${stderr}`);
            return res.status(500).json({ message: "Erreur de sortie lors de l'exécution du script." });
        }
        console.log(`Sortie du script : ${stdout}`);
        return res.status(200).json({ message: "Script exécuté avec succès." });
    });
});

module.exports = router;
