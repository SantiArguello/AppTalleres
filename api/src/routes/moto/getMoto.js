const express = require("express");
const router = express.Router();
const Moto = require("../../models/Motos/moto");
const Cliente = require("../../models/Clientes/cliente");


router.get("/moto/:clienteId", async (req, res) => {
  try {
    const clienteId = req.params.clienteId;

    // Consulta para obtener las motos filtradas por el cliente
    const motos = await Moto.find({ cliente: clienteId })
      .populate({
        path: "cliente",
        select: "nombre apellido",
      })
      .populate({
        path: "modelo",
        select:"modelo segmento -_id "
      })
      .select("-__v");

    res.status(200).json(motos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las motos", error: error.message });
  }
});


module.exports = router;