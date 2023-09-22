const express = require("express");
const router = express.Router();
const TrabajoFiltrado = require("../../models/Trabajo Filtrado/trabajoFiltrado.js");



// Ruta para obtener todos los trabajos filtrados

router.get("/trabajoFiltrado", async (req, res) => {
    try {
        const trabajoFiltrado = await TrabajoFiltrado.find();
        res.status(200).json(trabajoFiltrado);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los trabajos filtrados", error: error.message });
    }

})

module.exports = router;