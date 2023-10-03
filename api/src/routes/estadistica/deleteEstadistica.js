const express = require("express");
const router = express.Router();
const Estadisticas = require("../../models/Estadisticas/estadisticas");


router.delete("/estadisticas/:id", async (req, res) => {
  try {
    const estadistica = await Estadisticas.findByIdAndRemove(req.params.id);

    if (!estadistica) {
      return res.status(404).json({ message: "No se encontró la estadística" });
    }

    res.json({ message: "Estadística eliminada con éxito" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar la estadística" });
  }
});

module.exports = router;
