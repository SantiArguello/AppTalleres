const mongoose = require("mongoose");

const motoFiltradoSchema = new mongoose.Schema({
  modelo: {
    type: String,
    required: true,
  },
});

const MotoFiltrado = mongoose.model("Moto Filtrado", motoFiltradoSchema);

module.exports = MotoFiltrado;
