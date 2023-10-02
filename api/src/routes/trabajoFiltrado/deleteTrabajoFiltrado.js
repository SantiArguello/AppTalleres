const express = require("express");
const router = express.Router();
const TrabajoFiltrado = require("../../models/Trabajo Filtrado/trabajoFiltrado.js");



router.delete("/trabajoFiltrado/:id", async (req, res) => {
  try {
    const trabajoFiltradoId = req.params.id;

    const trabajoFiltradoEliminado = await TrabajoFiltrado.findByIdAndDelete(
      trabajoFiltradoId
    );
    if (!trabajoFiltradoEliminado) {
      throw new Error("Trabajo no encontrado");
    }

    res
      .status(200)
      .json({ message: "Trabajo eliminado exitosamente" });
  } catch (error) {
    res.status(404).json({
      message: "Error al eliminar el trabajo",
      error: error.message,
    });
  }
});

module.exports = router;