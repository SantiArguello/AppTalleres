const express = require("express")
const router = express.Router()

const Factura = require("../../models/Facturas/factura.js")



router.delete("/factura/:id", async (req, res) => { 
    try {
        const facturaEliminada = await Factura.findByIdAndDelete(req.params.id)

        if (!facturaEliminada) {
            return res.status(404).json({ message: "Factura no encontrada" });
        }
        res.status(200).json({ message: "Factura eliminada exitosamente" });
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error al eliminar la factura", error: error.message });
    }

})

module.exports = router;