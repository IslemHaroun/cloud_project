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

exports.getAllVersions = (req, res) => {
    const systemId = req.params.systemId;
    System.getAllVersions(systemId)
      .then((versions) => {
        res.status(200).json({ versions });
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des versions :", err);
        res.status(500).json({ error: "Erreur interne du serveur" });
      });
  };
  
  exports.deleteVersion = (req, res) => {
    const versionId = req.params.versionId;
    System.deleteVersion(versionId)
      .then(() => {
        res.status(200).json({ message: "Version supprimée avec succès" });
      })
      .catch((err) => {
        console.error("Erreur lors de la suppression de la version :", err);
        res.status(500).json({ error: "Erreur interne du serveur" });
      });
  };
  
  exports.updateVersion = (req, res) => {
    const versionId = req.params.versionId;
    const { newName, newVersion } = req.body;
    System.updateVersion(versionId, newName, newVersion)
      .then(() => {
        res.status(200).json({ message: "Version mise à jour avec succès" });
      })
      .catch((err) => {
        console.error("Erreur lors de la mise à jour de la version :", err);
        res.status(500).json({ error: "Erreur interne du serveur" });
      });
  };
      