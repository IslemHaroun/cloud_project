const jwt = require('jsonwebtoken');
const dotenv = require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    // Vérifier si l'en-tête Authorization est présent
    if (!req.headers.authorization) {
        return res.status(401).json({ message: 'Authentification échouée : Token manquant' });
    }

    // Récupérer le token depuis l'en-tête Authorization
    const token = req.headers.authorization.split(' ')[1];

    try {
        // Vérifier et décoder le token
        const decodedToken = jwt.verify(token, secretKey);
        req.userData = { email: decodedToken.email, userId: decodedToken.userId };
        next(); // Autoriser la requête à poursuivre
    } catch (error) {
        return res.status(401).json({ message: 'Authentification échouée : Token invalide' });
    }
};
