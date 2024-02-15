const db = require("../../db/db.js"); // Assurez-vous d'importer correctement votre connexion à la base de données

class MailChecker {
  static findByEmail(mail, callback) {
  db.get("SELECT * FROM users WHERE mail = ?", [mail], (err, row) => {
    if (err) {
      callback(err, null); // En cas d'erreur, rejeter avec l'erreur
    } else {
      callback(null, row); // En cas de succès, résoudre avec les données de l'utilisateur
    }
  });
}
}

module.exports = MailChecker;
