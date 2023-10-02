const express = require("express");
const router = express.Router();
const MotoFiltrado = require("../../models/Moto Filtrado/motoFiltrado");



// Crear una nueva moto
router.post("/motoFiltrado", async (req, res) => {
  try {
    const nuevaMotoFiltrado = new MotoFiltrado(req.body);
    await nuevaMotoFiltrado.save();
    res.status(201).json(nuevaMotoFiltrado);
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la moto filtrada",
      error: error.message,
    });
  }
});

module.exports = router;