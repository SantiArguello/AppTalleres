const express = require("express");
const router = express.Router();
const Usuario = require("../../models/Usuario/usuario");

router.delete("/usuarios/:id", async (req, res) => {
  try {
    const usuarioId = req.params.id;

    const usuarioExistente = await Usuario.findById(usuarioId);

    if (!usuarioExistente) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    await Usuario.findByIdAndRemove(usuarioId);

    res.json({ message: "Usuario eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
