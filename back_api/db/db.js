// Connexion à la base de données SQLite

const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/db_cloud.db");

module.exports = db;
