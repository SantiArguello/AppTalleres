const express = require("express");
const router = express.Router();
const Moto = require("../../models/Motos/moto");
const Cliente = require("../../models/Clientes/cliente");

router.post("/moto", async (req, res) => {
  try {
    const nuevaMoto = new Moto(req.body);
    await nuevaMoto.save();

    // ID de la nueva moto al cliente asociado
    const clienteId = nuevaMoto.cliente;
    const cliente = await Cliente.findById(clienteId);

    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }

    cliente.moto.push(nuevaMoto._id);
    await cliente.save();

    res.status(201).json(nuevaMoto);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear la moto", error: error.message });
  }
});

module.exports = router;