const mongoose = require('mongoose');

const repuestoInsumoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
    },
    motoFiltrado:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "MotoFiltrado"
    },
    precio: {
        type: Number,
    },
    precioVenta: {
        type: Number,
    },
    estado: {
      type: Number  
    }

})

const RepuestoInsumo = mongoose.model('RepuestoInsumo', repuestoInsumoSchema);

module.exports = RepuestoInsumo;

