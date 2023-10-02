const express = require("express");
const router = express.Router();
const Agenda = require("../../models/Agenda/agenda");


router.put("/agenda/:id", async (req, res) => {
  try {
    const agendaId = req.params.id;
    const agendaActualizada = await Agenda.findByIdAndUpdate(
      agendaId,
      req.body,
      {
        new: true,
      }
    );

    if (!agendaActualizada) {
      return res.status(404).json({ message: "Agenda no encontrada" });
    }

    res.status(200).json(agendaActualizada);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar la agenda", error: error.message });
  }
});

module.exports = router;