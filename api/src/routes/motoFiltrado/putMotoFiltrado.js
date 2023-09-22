const express = require("express");
const router = express.Router();
const MotoFiltrado = require("../../models/Moto Filtrado/motoFiltrado");

// Actualizar una moto por ID
router.put("/motoFiltrado/:id", async (req, res) => {
  try {
    const motoFiltradoId = req.params.id;
    const motoFiltradoActualizada = await MotoFiltrado.findByIdAndUpdate(
      motoFiltradoId,
      req.body,
      { new: true }
    );

    if (!motoFiltradoActualizada) {
      return res.status(404).json({ message: "Moto filtrada no encontrada" });
    }

    res.status(200).json(motoFiltradoActualizada);
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar la moto filtrada",
      error: error.message,
    });
  }
});

module.exports = router;