const express = require("express");
const router = express.Router();
const Estadisticas = require("../../models/Estadisticas/estadisticas");

router.put("/estadisticas/:id", async (req, res) => {
  try {
    const estadisticaActualizada = await Estadisticas.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!estadisticaActualizada) {
      return res.status(404).json({ message: "No se encontró la estadística" });
    }

    res.json(estadisticaActualizada);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar la estadística" });
  }
});

module.exports = router;
