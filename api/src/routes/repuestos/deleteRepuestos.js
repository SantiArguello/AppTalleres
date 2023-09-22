const express = require("express");
const router = express.Router();
const Repuesto = require("../../models/RepuestosInsumos/repuestoInsumo.js");



router.delete("/repuesto/:id", async (req, res) => {
  try {
    const repuestoId = req.params.id;

    const repuestoEliminado = await Repuesto.findByIdAndDelete(repuestoId);
    if (!repuestoEliminado) {
      throw new Error("Repuesto/Insumo no encontrado");
    }

    res.status(200).json({ message: "Repuesto/Insumo eliminado exitosamente" });
  } catch (error) {
    res.status(404).json({
      message: "Error al eliminar el repuesto/insumo",
      error: error.message,
    });
  }
});


module.exports = router;