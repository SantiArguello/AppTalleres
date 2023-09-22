const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TrabajoSchema = new mongoose.Schema({

    trabajoRealizar: {
        type: Schema.Types.ObjectId,
        ref:"Agenda"
    },
    trabajoRealizado: {
        type: Schema.Types.ObjectId,
        ref:"Service"
    }

});

const Trabajo = mongoose.model("Trabajo", TrabajoSchema);

module.exports = Trabajo;