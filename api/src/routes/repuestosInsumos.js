const express = require("express");
const router = express.Router();
const Repuesto = require("../models/RepuestosInsumos/repuestoInsumo.js");


// Ruta para crear un nuevo repuesto o insumo

router.post("/repuesto", async (req, res) => {
  try {
    const nuevoRepuesto = new Repuesto(req.body);
    await nuevoRepuesto.save();
    res.status(201).json(nuevoRepuesto);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear el repuesto", error: error.message });
  }
});


// Ruta para obtener todos los repuestos o insumos

router.get("/repuestos", async (req, res) => {
  try {
    const repuestos = await Repuesto.find();
    res.status(200).json(repuestos);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener los repuestos",
      error: error.message,
    });
  }
});


// Ruta para modificar un repuesto o insumo

router.put("/repuesto/:id", async (req, res) => {
  try {
    const repuestoId = req.params.id;
    const datosActualizados = req.body;

    const repuestoExistente = await Repuesto.findById(repuestoId);
    if (!repuestoExistente) {
      throw new Error("Repuesto no encontrado");
    }
    repuestoExistente.set(datosActualizados);
    await repuestoExistente.save();
    res.status(200).json(repuestoExistente);
  } catch (error) {
    res.status(404).json({
      message: "Error al actualizar el repuesto",
      error: error.message,
    });
  }
});

module.exports = router;