const mongoose = require("mongoose");
const sumaImporteFactura = require("../../middlewares/sumaImporteFactura");

const Schema = mongoose.Schema;

const facturaSchema = new Schema({
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
    },
    descripcion: [{
        detalle: {
            type: String,
        },
        importe: {
            type: Number,
        }
    }],
    precioTotal: {
        type: Number
    }
})

facturaSchema.pre("save", sumaImporteFactura);

const Factura = mongoose.model("Factura", facturaSchema);
module.exports = Factura;