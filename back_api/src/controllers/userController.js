// userController.js
const db = require("../../db/db.js"); 
const User = require("../models/Users.js")

module.exports = {
  getAllUsers: (req, res) => {
    const query = "SELECT mail, first_name, name, role, credit FROM users"; 
    db.all(query, (err, users) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({
            message:
              "Une erreur s'est produite lors de la récupération des utilisateurs.",
          });
      }
      res.json(users);
    });  },

  getUserById: async (req, res) => {

    try {
      const userId = req.params.id;
      const user = await User.getUserById(userId);
      res.json(user);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'utilisateur par ID :', error);
      res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur par ID' });
    }
  },

    

};