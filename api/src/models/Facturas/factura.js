const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const facturaSchema = new mongoose.Schema({
    clienteId: {
        type: Schema.Types.ObjectId,
        ref: "Cliente"
    },
    metodoDePago: {
        type: String,
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})

const Factura = mongoose.model("Factura", facturaSchema);
module.exports = Factura;