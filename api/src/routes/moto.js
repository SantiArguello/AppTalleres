const express = require("express");
const router = express.Router();
const Moto = require("../models/Motos/moto");
const Cliente = require("../models/Clientes/cliente");

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

router.get("/moto/:clienteId", async (req, res) => {
  try {
    const clienteId = req.params.clienteId;

    const motos = await Moto.find({ cliente: clienteId });
    res.status(200).json(motos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las motos", error: error.message });
  }
});

router.put("/moto/:id", async (req, res) => {
  try {
    const motoId = req.params.id;
    const motoActualizada = await Moto.findByIdAndUpdate(motoId, req.body, {
      new: true,
    });

    if (!motoActualizada) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }

    res.status(200).json(motoActualizada);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar la moto", error: error.message });
  }
});

router.delete("/moto/:id", async (req, res) => {
  try {
    const motoId = req.params.id;
    const motoEliminada = await Moto.findByIdAndDelete(motoId);

    if (!motoEliminada) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }

    res.status(200).json({ message: "Moto eliminada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la moto", error: error.message });
  }
});

module.exports = router;
