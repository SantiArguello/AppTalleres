const express = require("express");
const router = express.Router();
const Cliente = require("../models/Clientes/cliente.js");

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

//ruta para obtener clientes por nombre y o apellido
router.get("/clientes/buscar", async (req, res) => {
  try {
    const searchTerm = req.query.search; // Obtener el término de búsqueda de los query parameters

    // Utilizar una expresión regular para buscar coincidencias en nombre y apellido
    const searchRegex = new RegExp(searchTerm, "i");

    // Buscar clientes que coincidan con el término en nombre o apellido
    const clientesEncontrados = await Cliente.find({
      $or: [
        { nombre: { $regex: searchRegex } },
        { apellido: { $regex: searchRegex } },
      ],
    }).populate({
      path: "moto",
      populate: {
        path: "modelo",
        select: "modelo segmento", // Aquí seleccionamos solo los campos que queremos mostrar
      },
    });

    res.status(200).json(clientesEncontrados);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error en la búsqueda", error: error.message });
  }
});



module.exports = router;
