const express = require("express");
const router = express.Router();
const Cliente = require("../../models/Clientes/cliente.js");
const Moto = require("../../models/Motos/moto.js");

// Ruta para crear un nuevo cliente
router.post("/cliente", async (req, res) => {
  try {
    const { nombre, apellido, telefono, moto, correo } = req.body;
    
    const nuevoCliente = new Cliente({ nombre, apellido, telefono, correo })
    const nuevaMoto = new Moto(moto)
    await nuevaMoto.save()
    nuevoCliente.moto.push(nuevaMoto._id)
    await nuevoCliente.save()

    const motoId = await Moto.findByIdAndUpdate(nuevaMoto._id, { cliente: nuevoCliente._id }, { new: true })
    
    await motoId.save()
    

    
    

    res.status(201).json(nuevoCliente);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear el cliente", error: error.message });
  }
});

module.exports = router;