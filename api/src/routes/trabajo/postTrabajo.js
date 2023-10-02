const express = require("express");
const router = express.Router();
const Trabajo = require("../../models/Trabajos/trabajo");

router.post("/trabajos", async (req, res) => {
  try {
    const { trabajoRealizar, trabajoRealizado } = req.body;

    const nuevoTrabajo = new Trabajo({
      trabajoRealizar,
      trabajoRealizado,
    });

    await nuevoTrabajo.save();

    res
      .status(201)
      .json({ message: "Documento creado con éxito", trabajo: nuevoTrabajo });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el documento" });
  }
});

module.exports = router;
