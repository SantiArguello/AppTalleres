const express = require('express');
const router = express.Router();

const Factura = require('../../models/Facturas/factura');

// ruta para obtener todas las facturas

router.get('/', async (req, res) => { 
    try {
         const facturas = await Factura.find();
        res.json(facturas);
    
    } catch (error) {
        res.status(500).json({
            message: "Error al obtener las facturas"
        })
    }
})

module.exports = router;