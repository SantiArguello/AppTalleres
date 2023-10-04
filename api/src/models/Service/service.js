const mongoose = require('mongoose');
const sumaPreciosService = require("../../middlewares/sumaPreciosService")

const serviceSchema = new mongoose.Schema({
  fecha: {
    type: Date,
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cliente'
  },
  moto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Moto'
  },
  detalles: {
    type: String,
  },
  cantidadRepuestos: [{
    repuesto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'RepuestoInsumo'
    },
    cantidad: {
      type: Number,
    }
  }],
  kilometros: {
    type: Number,
  },
  precioFinal: {
    type: Number,
  },
  extra: {
    type: String,
  },
  precioExtra: {
    type: Number,
  },
  manoDeObra: {
    type: Number,
  },
  precioRepuestosyExtras: {
    type: Number,
  }

});

serviceSchema.pre('save', sumaPreciosService);


const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;