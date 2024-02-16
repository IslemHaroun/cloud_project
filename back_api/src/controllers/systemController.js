const System = require("../models/System");

exports.insertSystem = (req, res) => {
  const { name, version } = req.body;
  System.insertSystem(name, version)
    .then((result) => {
      res
        .status(201)
        .json({ message: "Données insérées avec succès", systemId: result.id });
    })
    .catch((err) => {
      console.error(
        "Erreur lors de l'insertion des données dans la table 'system':",
        err
      );
      res.status(500).json({ error: "Erreur interne du serveur" });
    });
};
