const express = require("express");
const router = express.Router();
const MotoFiltrado = require("../../models/Moto Filtrado/motoFiltrado");


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


module.exports = router;