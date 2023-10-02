const express = require("express");
const router = express.Router();
const Agenda = require("../../models/Agenda/agenda");


router.get("/agenda", async (req, res) => {
  try {
 const agendas = await Agenda.find()
      .populate("nombre")
      .populate("motoFiltrado")
      .populate("trabajo");
    res.status(200).json(agendas);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las agendas", error: error.message });
  }
});

module.exports = router;