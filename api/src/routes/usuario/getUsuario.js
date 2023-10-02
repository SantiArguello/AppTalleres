const express = require("express");
const router = express.Router();
const Usuario = require("../../models/Usuario/usuario");

router.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
