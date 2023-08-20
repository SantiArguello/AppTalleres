const mongoose = require("mongoose");

const motoSchema = new mongoose.Schema({
  motoFiltrado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MotoFiltrado",
  },
  kilometros: {
    type: Number,
    required: true,
  },
  año: {
    type: Number,
    required: true,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  historial: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
    },
  ],
});

const Motos = mongoose.model("Motos", motoSchema);

module.exports = Motos;
