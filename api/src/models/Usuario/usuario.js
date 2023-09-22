const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuarioSchema = new mongoose.Schema({

    fecha: {
        type: Date,
        default: Date.now
    },
    nombre: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    token: {
        type: String,
    }
    

});

const Usuario = mongoose.model("Usuario", usuarioSchema);

module.exports = Usuario;