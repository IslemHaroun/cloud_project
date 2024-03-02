const express = require('express');
const app = express();
const path = require('path'); 
const port = 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'asset/img')));



app.get('/register', (req, res) => {
    res.render('register');
  });

app.get('/setting', (req, res) => {
    res.render('setting_acc');
});

app.get('/user_home', (req, res) => {
  fetch(`http://localhost:4000/system/os`, {
      method: "GET",
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Erreur lors de la requête : ' + response.statusText);
      }
      return response.json();
  })
  .then(userData => {
      const arrayVersion = Object.values(userData);
    //   console.log(arrayVersion)
      res.render('user_home', { data: arrayVersion });
  })
  .catch(error => {
      console.error('Erreur lors de la requête :', error.message);
      res.status(500).send('Erreur lors de la récupération des données');
  });
});


app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Accueil' });
});
// Démarrer le serveur
app.listen({ port }, () => {
    console.log(`Serveur démarré sur le port ${port}`);
    console.log(`http://localhost:${port}`);
});
