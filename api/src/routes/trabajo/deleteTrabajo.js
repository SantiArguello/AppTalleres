const express = require("express");
const router = express.Router();
const Trabajo = require("../../models/Trabajos/trabajo");

router.delete("/trabajos/:id", async (req, res) => {
  try {
    const trabajoId = req.params.id;

    const resultado = await Trabajo.deleteOne({ _id: trabajoId });

    if (resultado.deletedCount === 1) {
      res.status(200).json({ message: "Documento eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Documento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el documento" });
  }
});

module.exports = router;
