const express = require("express");
const router = express.Router();
const Factura = require("../../models/Facturas/factura");

// ruta para crear Factura

router.post("/factura", async (req, res) => {
    try {
        const nuevaFactura = new Factura(req.body);
        await nuevaFactura.save();
        res.status(201).json(nuevaFactura);

    } catch (error) {
        res.status(400).json({ message: "Error al crear la factura", error: error.message });
    
    }
});
 
module.exports = router;