const express = require("express");
const router = express.Router();
const MotoFiltrado = require("../../models/Moto Filtrado/motoFiltrado");


//Elimina la motoFiltrada por su ID
router.delete("/motoFiltrado/:id", async (req, res) => {
  try {
    const motoFiltradoId = req.params.id;
    const motoFiltradoEliminada = await MotoFiltrado.findByIdAndDelete(
      motoFiltradoId
    );

    if (!motoFiltradoEliminada) {
      return res.status(404).json({ message: "Moto filtrada no encontrada" });
    }

    res.status(200).json({ message: "Moto filtrada eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la moto filtrada",
      error: error.message,
    });
  }
});

module.exports = router;