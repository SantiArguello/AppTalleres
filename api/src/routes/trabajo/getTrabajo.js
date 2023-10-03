const express = require("express");
const router = express.Router();
const Trabajo = require("../../models/Trabajos/trabajo");

router.get("/trabajos", async (req, res) => {
  try {
    const trabajos = await Trabajo.find();

    res.status(200).json(trabajos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los documentos" });
  }
});

module.exports = router;
