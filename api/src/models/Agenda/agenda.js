const mongoose = require("mongoose");

const agendaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    default: Date.now,
  },
  nombre: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Cliente"
  },
  motoFiltrado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MotoFiltrado",
  },
  trabajo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TrabajoFiltrado",
  },
});

const Agenda = mongoose.model("Agenda", agendaSchema);

module.exports = Agenda;
