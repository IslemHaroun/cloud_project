// userController.js
const db = require("../../db/db.js"); 

exports.getAllUsers = (req, res) => {
  const query = "SELECT mail, first_name, name, role FROM users"; 
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
  });
};
