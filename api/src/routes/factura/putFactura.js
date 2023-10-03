const express = require("express");
const router = express.Router();
const Factura = require("../../models/Facturas/factura");

// ruta para modificar una factura

router.put("/factura/:id", async (req, res) => {
  try {
    const facturaId = req.params.id;
    const datosActualizados = req.body;

    const facturaExistente = await Factura.findById(facturaId);
    if (!facturaExistente) {
      return res.status(404).json({ message: "Factura no encontrada" });
    }

    facturaExistente.set(datosActualizados);
    await facturaExistente.save();
    res.status(200).json(facturaExistente);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al actualizar la factura",
        error: error.message,
      });
  }
});


module.exports = router;