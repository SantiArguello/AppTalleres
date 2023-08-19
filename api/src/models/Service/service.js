const mongoose = require('mongoose');

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
  precio: {
    type: Number,
  },
  kilometros: {
    type: Number,
  }
});

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;