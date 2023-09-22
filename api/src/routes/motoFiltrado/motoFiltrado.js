const express = require("express");
const router = express.Router();
const MotoFiltrado = require("../../models/Moto Filtrado/motoFiltrado");

// Actualizar una moto por ID
router.put("/motoFiltrado/:id", async (req, res) => {
  try {
    const motoFiltradoId = req.params.id;
    const motoFiltradoActualizada = await MotoFiltrado.findByIdAndUpdate(
      motoFiltradoId,
      req.body,
      { new: true }
    );

    if (!motoFiltradoActualizada) {
      return res.status(404).json({ message: "Moto filtrada no encontrada" });
    }

    res.status(200).json(motoFiltradoActualizada);
  } catch (error) {
    res.status(400).json({
      message: "Error al actualizar la moto filtrada",
      error: error.message,
    });
  }
});

// Obtener una moto por su ID
router.get("/motoFiltrado/:id", async (req, res) => {
  try {
    const motoFiltradoId = req.params.id;
    const motoFiltrado = await MotoFiltrado.findById(motoFiltradoId);

    if (!motoFiltrado) {
      return res.status(404).json({ message: "Moto filtrada no encontrada" });
    }

    res.status(200).json(motoFiltrado);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener la moto filtrada",
      error: error.message,
    });
  }
});

// Obtener todas las motos
router.get("/motoFiltrado", async (req, res) => {
  try {
    const { modelo } = req.query;
    const query = modelo ? { modelo } : {};

    const motosFiltradas = await MotoFiltrado.find(query);
    res.status(200).json(motosFiltradas);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las motos filtradas",
      error: error.message,
    });
  }
});

// Crear una nueva moto
router.post("/motoFiltrado", async (req, res) => {
  try {
    const nuevaMotoFiltrado = new MotoFiltrado(req.body);
    await nuevaMotoFiltrado.save();
    res.status(201).json(nuevaMotoFiltrado);
  } catch (error) {
    res.status(400).json({
      message: "Error al crear la moto filtrada",
      error: error.message,
    });
  }
});

// localHost:3000/filtroPorModelo/buscar?keyword=*PALABRA*
router.get("/filtroPorModelo/buscar", async (req, res) => {
  try {
    const { keyword } = req.query;
    const query = keyword ? { segmento: { $regex: keyword, $options: "i" } } : {};

    const motosFiltradas = await MotoFiltrado.find(query);
    res.status(200).json(motosFiltradas);
  } catch (error) {
    res.status(500).json({
      message: "Error al obtener las motos filtradas",
      error: error.message,
    });
  }
});

//Elimina la motoFiltrada por su ID
router.delete("/motoFiltrado/:id", async (req, res) => {
  try {
    const motoFiltradoId = req.params.id;
    const motoFiltradoEliminada = await MotoFiltrado.findByIdAndDelete(
      motoFiltradoId
    );

    if (!motoFiltradoEliminada) {
      return res.status(404).json({ message: "Moto filtrada no encontrada" });
    }

    res.status(200).json({ message: "Moto filtrada eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la moto filtrada",
      error: error.message,
    });
  }
});

module.exports = router;
