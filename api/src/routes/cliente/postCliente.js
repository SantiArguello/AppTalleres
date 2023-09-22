const express = require("express");
const router = express.Router();
const Cliente = require("../../models/Clientes/cliente.js");

// Ruta para crear un nuevo cliente
router.post("/cliente", async (req, res) => {
  try {
    const nuevoCliente = new Cliente(req.body);
    await nuevoCliente.save();
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear el cliente", error: error.message });
  }
});

module.exports = router;