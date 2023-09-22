const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const estaditicasSchema = new mongoose.Schema({

    dineroRepuestos: {
        type: Schema.Types.ObjectId,
        ref: "RepuestoInsumo"
    },

    motos: {
        type: Schema.Types.ObjectId,
        ref: "Moto"
    },
    manoDeObra: {
        type: Schema.Types.ObjectId,
        ref:"Service"
    },
    
    precioRepuestos: {
        type: Schema.Types.ObjectId,
        ref: "Service"
    },

    precioExtra: {
        type: Schema.Types.ObjectId,
        ref: "Service"
    },

    PrecioRyE: {
        type: Schema.Types.ObjectId,
        ref: "Service"
    },

    trabajosRealizados: {
        type: Schema.Types.ObjectId,
        ref:"Trabajo"
    }


})

const Estadisticas = mongoose.model("Estadisticas", estaditicasSchema);

module.exports = Estadisticas;