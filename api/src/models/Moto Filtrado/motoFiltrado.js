const mongoose = require("mongoose");

const motoFiltradoSchema = new mongoose.Schema({
  modelo: {
    type: String,
    required: true,
  },
  segmento: {
    type: String,
    required: true,
  }
});

const MotoFiltrado = mongoose.model("MotoFiltrado", motoFiltradoSchema);

module.exports = MotoFiltrado;
