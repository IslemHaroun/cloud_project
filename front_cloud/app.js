const express = require('express');
const app = express();
const path = require('path'); // Ajoutez cette ligne pour importer le module path
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', (req, res) => {
  // Rendre la vue principale d'accueil (home.ejs)
  res.render('home', { pageTitle: 'Accueil' });
});
// Démarrer le serveur
app.listen(3000, () => {
    console.log(`Serveur démarré sur le port ${port}`);
    console.log(`http://localhost:${port}`);
});
