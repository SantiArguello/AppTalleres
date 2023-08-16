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
        type: mongoose.Schema.Types.ObjectId,
        ref: "MotoFiltrado"
    },
    precio: {
        type: Number,
    }

})

const RepuestoInsumo = mongoose.model('RepuestoInsumo', repuestoInsumoSchema);

module.exports = RepuestoInsumo;
