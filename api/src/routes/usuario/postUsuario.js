const express = require("express");
const router = express.Router();
const Usuario = require("../../models/Usuario/usuario");

router.post("/usuarios", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    const nuevoUsuario = new Usuario({
      nombre,
      email,
      password,
    });

    const usuarioGuardado = await nuevoUsuario.save();

    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
