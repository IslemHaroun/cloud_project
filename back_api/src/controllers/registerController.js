// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");

const JWT_SECRET =
  "eyJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoidGVzdCJ9.VZqdmEUz4H4lQWLZOAf7gAOZjJw7Yhyp4WlS3UolSBE";

exports.register = async (req, res) => {
  const { name, firstName, mail, password, role } = req.body;

  try {
    const existingUser = await User.findByMail(mail);
    if (existingUser) {
      return res.status(400).json({ message: "Cet email est déjà utilisé" });
    }

    const newUser = await User.createUser(
      name,
      firstName,
      mail,
      password,
      role
    );
    const token = jwt.sign({ id: newUser.id, mail }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur de serveur" });
  }
};
