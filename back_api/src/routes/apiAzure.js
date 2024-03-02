const express = require("express");
const router = express.Router();
const jwtMiddleware = require('../middlewares/jwtMiddleware.js');
const { exec } = require('child_process');
require('dotenv').config();


const azureId = process.env.AZURE_SUBSCRIPTION_ID;
const azureClient = process.env.AZURE_CLIENT_ID;
const azureClientSecret = process.env.AZURE_CLIENT_SECRET;
const azureTenantId = process.env.AZURE_TENANT_ID;

router.post("/start", (req, res) => {
    const systemData = req.body;
    const system_name = systemData.system_name;
    console.log(systemData.system_name);
    const progressMessages = [
        "Votre machine à bien était creée",
    ];

    if(system_name == "Ubuntu" && system_name != "" && system_name != null){
    
        exec( `AZURE_SUBSCRIPTION_ID=${azureId} AZURE_CLIENT_ID=${azureClient} AZURE_CLIENT_SECRET=${azureClientSecret} AZURE_TENANT_ID=${azureTenantId} node azure_api_management/ubuntu.js`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution du script : ${error.message}`);
                return res.status(500).json({ message: "Erreur lors de l'exécution du script." });
            }
            if (stderr) {
                console.error(`Erreur de sortie : ${stderr}`);
                return res.status(500).json({ message: "Erreur de sortie lors de l'exécution du script." });
            }
            console.log(`Sortie du script : ${stdout}`);
            res.status(200).json({message : progressMessages,stdout : stdout});
        });

    }else if(system_name == "Debian" && system_name != "" && system_name != null){

        exec( `AZURE_SUBSCRIPTION_ID=${azureId} AZURE_CLIENT_ID=${azureClient} AZURE_CLIENT_SECRET=${azureClientSecret} AZURE_TENANT_ID=${azureTenantId} node azure_api_management/debian.js`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution du script : ${error.message}`);
                return res.status(500).json({ message: "Erreur lors de l'exécution du script." });
            }
            if (stderr) {
                console.error(`Erreur de sortie : ${stderr}`);
                return res.status(500).json({ message: "Erreur de sortie lors de l'exécution du script." });
            }
            console.log(`Sortie du script : ${stdout}`);
            res.status(200).json({message : progressMessages,stdout : stdout});
        });

    }else if (system_name == "Windows" && system_name != "" && system_name != null){

        exec( `AZURE_SUBSCRIPTION_ID=${azureId} AZURE_CLIENT_ID=${azureClient} AZURE_CLIENT_SECRET=${azureClientSecret} AZURE_TENANT_ID=${azureTenantId} node azure_api_management/windows.js`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Erreur lors de l'exécution du script : ${error.message}`);
                return res.status(500).json({ message: "Erreur lors de l'exécution du script." });
            }
            if (stderr) {
                console.error(`Erreur de sortie : ${stderr}`);
                return res.status(500).json({ message: "Erreur de sortie lors de l'exécution du script." });
            }
            console.log(`Sortie du script : ${stdout}`);
            res.status(200).json({message : progressMessages,stdout : stdout});
        });
    }else{
        res.status(500).json({ message: "UNA PROBLEMA !!" });
    }
});

module.exports = router;
