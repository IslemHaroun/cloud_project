// Import des dépendances
const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const registerRoutes = require("./src/routes/registerRoute");
const userRoutes = require("./src/routes/userRoute");
const authRoutes = require("./src/routes/authRoute");
const addSystem = require("./src/routes/systemRoute");
const executeAzure = require("./src/routes/apiAzure");
const VmUseRoutes = require("./src/routes/vmUserRoute");
// Création de l'application Express
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/newUser", registerRoutes);
app.use("/system", addSystem);
app.use('/execute-azure', executeAzure);
app.use('/vmuser', VmUseRoutes);

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue;text-align:center;'>Voulez-vous du pain ? ! Cerculez-donc !</h1>");
});
// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
  console.log(`http://localhost:${port}/`);
});
