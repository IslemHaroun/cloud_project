// controllers/authController.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/Users.js");
const dotenv = require('dotenv').config();


const secretKey = process.env.JWT_SECRET;


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
    const token = jwt.sign({ id: newUser.id, mail }, secretKey, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur de serveur" });
  }
};
