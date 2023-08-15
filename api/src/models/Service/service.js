const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    fecha: {
        type: Date,
    },
    cliente: {
        type: mongoose.Schema.types.ObjectId,
        ref: 'Cliente'
    },
    moto: {
        type: mongoose.Schema.types.ObjectId,
        ref: 'Moto'
    },
    detalles: {
        type: String,
    },
    repuestos: [{
        type: mongoose.Schema.types.ObjectId,
        ref: 'RepuestoInsumo'
    }],
    precio: {
        type: Number,
    },
    kilometros: {
        type: Number,
    }
})

const Service = mongoose.model('Service', serviceSchema);
module.exports = Service;