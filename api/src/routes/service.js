const express = require("express");
const router = express.Router();
const Service = require("../models/Service/service");
const Moto = require("../models/Motos/moto");
const RepuestoInsumo = require("../models/RepuestosInsumos/repuestoInsumo");


// Ruta para crear un nuevo servicio

router.post("/service", async (req, res) => {
  try {
    //crea un nuevo service
    const nuevoServicio = new Service(req.body);
    await nuevoServicio.save();

    // actualiza los kilometros de la moto
    const moto = await Moto.findById(req.body.moto);
    moto.kilometros = req.body.kilometros; // Actualizar los kilómetros
    await moto.save();

    // Agregar el ID del servicio al array de historial en la moto
    moto.historial.push(nuevoServicio._id);
    await moto.save();

    
    // Actualizar el stock de repuestos/insumos
    for (const repuesto of nuevoServicio.cantidadRepuestos) {
      const repuestoEnDB = await RepuestoInsumo.findById(repuesto.repuesto);
      if (repuestoEnDB) {
        repuestoEnDB.stock -= repuesto.cantidad; // Restar la cantidad utilizada
        await repuestoEnDB.save();
      }
    }


    res.status(201).json(nuevoServicio);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear el servicio", error: error.message });
  }
});

// Ruta para obtener todos los servicios

router.get("/service", async (req, res) => {
  try {
    const servicios = await Service.find();
    res.status(200).json(servicios);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener los servicios",
        error: error.message,
      });
  }
});

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

module.exports = router;
