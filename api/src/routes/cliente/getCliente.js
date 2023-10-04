const express = require("express");
const router = express.Router();
const Cliente = require("../../models/Clientes/cliente.js");



// Ruta para obtener todos los clientes
router.get("/clientes", async (req, res) => {
  try {
    const clientes = await Cliente.find()
      .populate({
        path: "moto",
        select: "modelo kilometros año -_id",
        populate: {
          path: "modelo",
          select:"modelo segmento -_id"
        }
        
      })
    
    res.status(200).json(clientes);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener los clientes", error: error.message });
  }
});


//ruta para obtener clientes por nombre y o apellido
router.get("/clientes/buscar", async (req, res) => {
    try {
      const searchTerm = req.query.search; // Obtener el término de búsqueda de los query parameters
  
      // Utilizar una expresión regular para buscar coincidencias en nombre y apellido
      const searchRegex = new RegExp(searchTerm, "i");
  
      // Buscar clientes que coincidan con el término en nombre o apellido
      const clientesEncontrados = await Cliente.find({
        $or: [
          { nombre: { $regex: searchRegex } },
          { apellido: { $regex: searchRegex } },
        ],
      }).populate({
        path: "moto",
        select: "modelo kilometros año -_id",
        populate: {
          path: "modelo",
          select:"modelo segmento -_id"
        }
        
      })
  
      res.status(200).json(clientesEncontrados);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error en la búsqueda", error: error.message });
    }
});
  
module.exports = router;