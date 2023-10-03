const express = require("express")
const router = express.Router()

const Cliente = require("../../models/Clientes/cliente.js")

// Ruta para borrar cliente por id

router.delete("/cliente/:id", async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id)
        if (!clienteEliminado) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.status(200).json({ message: "Cliente eliminado exitosamente" });
    
        
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error al eliminar el cliente", error: error.message });
    
    }
})

module.exports = router;