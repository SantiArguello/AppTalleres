const express = require("express");
const router = express.Router();
const Service = require("../../models/Service/service");
const Moto = require("../../models/Motos/moto");
const RepuestoInsumo = require("../../models/RepuestosInsumos/repuestoInsumo");

// Ruta para modificar un servicio

router.put("/service/:id", async (req, res) => {
  try {
    const servicioId = req.params.id;
    const datosActualizados = req.body;

    const servicioExistente = await Service.findById(servicioId);
    if (!servicioExistente) {
      throw new Error("Servicio no encontrado");
    }

    servicioExistente.set(datosActualizados);

    await servicioExistente.save();
    res.status(200).json(servicioExistente);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al modificar el servicio",
        error: error.message,
      });
  }
});

// nueva ruta aqui

module.exports = router;