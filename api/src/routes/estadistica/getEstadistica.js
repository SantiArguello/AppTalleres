const express = require("express");
const router = express.Router();
const Estadisticas = require("../../models/Estadisticas/estadisticas");

router.get("/estadisticas", async (req, res) => {
  try {
    const estadisticas = await Estadisticas.find();
    res.json(estadisticas);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener las estadísticas" });
  }
});

module.exports = router;
