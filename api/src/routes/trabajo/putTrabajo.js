const express = require("express");
const router = express.Router();
const Trabajo = require("../../models/Trabajos/trabajo");

router.put("/trabajos/:id", async (req, res) => {
  try {
    const trabajoId = req.params.id;
    const { trabajoRealizar, trabajoRealizado } = req.body;

    const resultado = await Trabajo.findOneAndUpdate(
      { _id: trabajoId },
      { trabajoRealizar, trabajoRealizado },
      { new: true }
    );

    if (resultado) {
      res.status(200).json({
        message: "Documento actualizado con éxito",
        trabajo: resultado,
      });
    } else {
      res.status(404).json({ message: "Documento no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el documento" });
  }
});

module.exports = router;
