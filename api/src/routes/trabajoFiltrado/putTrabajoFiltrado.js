const express = require("express");
const router = express.Router();
const TrabajoFiltrado = require("../../models/Trabajo Filtrado/trabajoFiltrado.js");


 
// Ruta para modificar un trabajo filtrado

router.put("/trabajoFiltrado/:id", async (req, res) => {
    try {
        const trabajoFiltradoId = req.params.id;
        const datosActualizados = req.body;
        const trabajoFiltrado = await TrabajoFiltrado.findById(trabajoFiltradoId);
        trabajoFiltrado.set(datosActualizados);
        await trabajoFiltrado.save();
        res.status(200).json(trabajoFiltrado);
    } catch (error) {
        res.status(500).json({ message: "Error al modificar el trabajo filtrado", error: error.message });
    }

    
})

module.exports=router;