const express = require("express");
const router = express.Router();
const Cliente = require("../../models/Clientes/cliente.js");



router.put("/cliente/:id", async (req, res) => {
  try {
    const clienteId = req.params.id;
    const datosActualizados = req.body;

    const clienteExistente = await Cliente.findById(clienteId);
    if (!clienteExistente) {
      throw new Error("Cliente no encontrado");
    }

    clienteExistente.set(datosActualizados);
    await clienteExistente.save();
    res.status(200).json(clienteExistente);
  } catch (error) {
    res.status(404).json({
      message: "Error al actualizar el cliente",
      error: error.message,
    });
  }
});


// ... Otras rutas y operaciones CRUD aquí

module.exports = router;
