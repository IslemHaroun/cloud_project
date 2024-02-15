// authController.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mailChecker = require("../models/mailChecker.js");
const dotenv = require("dotenv").config();
const secretKey = process.env.JWT_SECRET;

// Méthode pour gérer l'authentification
exports.authenticate = (req, res) => {
  const { mail, password } = req.body;
  console.log(req.body);
  // Vérifier si l'utilisateur existe dans la base de données
  mailChecker.findByEmail(mail, (err, users) => {
    if (err) {
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
    if (!users) {
      return res.status(404).json({ error: "Utilisateur non trouvé" });
    }

    // Vérifier le mot de passe
    bcrypt.compare(password, users.password, (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Erreur interne du serveur" });
      }
      if (!result) {
        return res.status(401).json({ error: "Mot de passe incorrect" });
      }

      // Créer et renvoyer le token JWT
      const token = jwt.sign({ mail: users.mail, id: users.id }, secretKey, {
        expiresIn: "1h",
      });
      res.json({ token });
    });
  });
};
