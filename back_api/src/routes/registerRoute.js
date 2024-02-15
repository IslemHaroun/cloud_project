// routes/authRoutes.js
const express = require("express");
const authController = require("../controllers/registerController");

const router = express.Router();

router.post("/register", authController.register);

module.exports = router;
