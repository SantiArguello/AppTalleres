const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
    
  },
    telefono: Number,
  
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
  moto: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Motos"
    }
  ]
  
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;