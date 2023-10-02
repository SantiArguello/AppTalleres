const express = require("express");
const router = express.Router();
const Agenda = require("../../models/Agenda/agenda");


// Eliminar agenda ya registrada
router.delete("/agenda/:id", async (req, res) => {
  try {
    const agendaId = req.params.id;
    const agendaEliminada = await Agenda.findByIdAndDelete(agendaId);

    if (!agendaEliminada) {
      return res.status(404).json({ message: "Agenda no encontrada" });
    }

    res.status(200).json({ message: "Agenda eliminada correctamente" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al eliminar la agenda", error: error.message });
  }
});

module.exports = router;