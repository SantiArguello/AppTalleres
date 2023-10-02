const express = require("express");
const router = express.Router();
const Repuesto = require("../../models/RepuestosInsumos/repuestoInsumo.js");

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

module.exports = router;