const mongoose = require('mongoose');

const repuestoInsumoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
    },
    motoFiltrado:{
        type: mongoose.Schema.types.ObjectId,
        ref: "MotoFiltrado"
    },
    precio: {
        type: Number,
    }

})

const RepuestoInsumo = mongoose.model('Repuesto', repuestoInsumoSchema);

module.exports = RepuestoInsumo;

