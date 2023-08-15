const mongoose = require("mongoose");

const trabajoFiltradoSchema = new mongoose.Schema({
  trabajo: {
    type: String,
  },
});

const trabajoFiltrado = mongoose.model(
  "TrabajoFiltrado",
  trabajoFiltradoSchema
);

module.exports = trabajoFiltrado;
