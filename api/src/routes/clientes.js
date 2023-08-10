const express = require("express");
const router = express.Router();
const Cliente = require("../models/cliente");

// Ruta para crear un nuevo cliente
router.post("/clientes", async (req, res) => {
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

// Ruta para obtener todos los clientes
router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.status(200).json(clientes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los clientes", error: error.message });
  }
});

// ... Otras rutas y operaciones CRUD aquí

module.exports = router;
