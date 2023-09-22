const express = require("express");
const router = express.Router();
const Repuesto = require("../../models/RepuestosInsumos/repuestoInsumo.js");


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