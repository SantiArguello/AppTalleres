const express = require("express");
const router = express.Router();
const Factura = require("../../models/Facturas/factura");
const Cliente = require("../../models/Clientes/cliente");

// ruta para crear Factura

router.post("/factura", async (req, res) => {
    try {
        const nuevaFactura = new Factura(req.body);
        await nuevaFactura.save();

        const cliente = await Cliente.findById(req.body.clienteId)
        cliente.facturas.push(nuevaFactura._id);
        await cliente.save();

        res.status(201).json(nuevaFactura);

    } catch (error) {
        res.status(400).json({ message: "Error al crear la factura", error: error.message });
    
    }

});
 
module.exports = router;