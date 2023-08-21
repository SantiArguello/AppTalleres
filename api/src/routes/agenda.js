const express = require("express");
const router = express.Router();
const Agenda = require("../models/Agenda/agenda");

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
