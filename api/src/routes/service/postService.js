const express = require("express");
const router = express.Router();
const Service = require("../../models/Service/service");
const Moto = require("../../models/Motos/moto");
const RepuestoInsumo = require("../../models/RepuestosInsumos/repuestoInsumo");


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

module.exports = router;