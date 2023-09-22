const express = require("express");
const router = express.Router();
const Repuesto = require("../../models/RepuestosInsumos/repuestoInsumo.js");

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

module.exports = router