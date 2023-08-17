const mongoose = require("mongoose");

const motoSchema = new mongoose.Schema({
  modelo: {
    type: String,
    required: true,
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
});

const Motos = mongoose.model("Motos", motoSchema);

module.exports = Motos;
