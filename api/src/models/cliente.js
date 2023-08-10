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
    telefono: String,
  
  fechaRegistro: {
    type: Date,
    default: Date.now,
  },
  moto: 
    {
      modelo: String,
      patente: String,
    },
  
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;