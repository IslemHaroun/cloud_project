// Import des dépendances
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const registerRoutes = require("./src/routes/registerRoute");
const userRoutes = require("./src/routes/userRoute");
const authRoutes = require("./src/routes/authRoute");

// Création de l'application Express
const app = express();
const port = 4000;


app.use(cors());

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/newUser", registerRoutes);

app.get("/", (req, res) => {
  res.send("Bienvenue sur votre API SQLite !");
});
// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
  console.log(`http://localhost:${port}/`);
});
