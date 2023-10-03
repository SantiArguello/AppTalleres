const express = require("express");
const router = express.Router();
const Usuario = require("../../models/Usuario/usuario");

router.put("/usuarios/:id", async (req, res) => {
  try {
    const usuarioId = req.params.id;
    const { nombre, email, password } = req.body;

    const usuarioExistente = await Usuario.findById(usuarioId);

    if (!usuarioExistente) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    usuarioExistente.nombre = nombre;
    usuarioExistente.email = email;
    usuarioExistente.password = password;

    const usuarioActualizado = await usuarioExistente.save();

    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
