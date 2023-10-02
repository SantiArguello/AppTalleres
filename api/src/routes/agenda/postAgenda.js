const express = require("express");
const router = express.Router();
const Agenda = require("../../models/Agenda/agenda");

router.post("/agenda", async (req, res) => {
  try {
    const nuevaAgenda = new Agenda(req.body);
    await nuevaAgenda.save();
    res.status(201).json(nuevaAgenda);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear la agenda", error: error.message });
  }
});

module.exports = router;