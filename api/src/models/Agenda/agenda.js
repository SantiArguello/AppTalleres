const mongoose = require("mongoose");

const agendaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  nombre: {
    type: mongoose.Schema.Types.Mixed,
    ref: "Cliente"
  },
  motoFiltrado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "motoFiltrado",
  },
  trabajo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "trabajoFiltrado",
  },
});

const Agenda = mongoose.model("Agenda", agendaSchema);

module.exports = Agenda;
