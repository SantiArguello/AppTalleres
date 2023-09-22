const express = require("express");
const router = express.Router();
const TrabajoFiltrado = require("../../models/Trabajo Filtrado/trabajoFiltrado.js");


//Ruta para crear un nuevo trabajo filtrado

router.post("/trabajoFiltrado", async (req, res) => {
try {
    const nuevoTrabajoFiltrado = new TrabajoFiltrado(req.body);
    await nuevoTrabajoFiltrado.save();
    res.status(201).json(nuevoTrabajoFiltrado);
} catch (error) {
    res.status(400).json({ message: "Error al crear el trabajo filtrado", error: error.message });

    
}

})

module.exports = router;