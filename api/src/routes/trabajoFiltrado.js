const express = require("express");
const router = express.Router();
const TrabajoFiltrado = require("../models/Trabajo Filtrado/trabajoFiltrado.js");
const { route } = require("./clientes.js");

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
 
// Ruta para obtener todos los trabajos filtrados

router.get("/trabajoFiltrado", async (req, res) => {
    try {
        const trabajoFiltrado = await TrabajoFiltrado.find();
        res.status(200).json(trabajoFiltrado);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los trabajos filtrados", error: error.message });
    }

})
 
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

router.delete("/trabajoFiltrado/:id", async (req, res) => {
  try {
    const trabajoFiltradoId = req.params.id;

    const trabajoFiltradoEliminado = await TrabajoFiltrado.findByIdAndDelete(
      trabajoFiltradoId
    );
    if (!trabajoFiltradoEliminado) {
      throw new Error("Trabajo no encontrado");
    }

    res
      .status(200)
      .json({ message: "Trabajo eliminado exitosamente" });
  } catch (error) {
    res.status(404).json({
      message: "Error al eliminar el trabajo",
      error: error.message,
    });
  }
});

module.exports = router;