const express = require("express");
const router = express.Router();
const Estadisticas = require("../../models/Estadisticas/estadisticas");


router.post("/estadisticas", async (req, res) => {
  try {
    const nuevaEstadistica = new Estadisticas(req.body);
    const estadisticaGuardada = await nuevaEstadistica.save();

    res.status(201).json(estadisticaGuardada);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear la estadística" });
  }
});

module.exports = router;