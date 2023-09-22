const express = require("express");
const router = express.Router();
const Moto = require("../../models/Motos/moto");
const Cliente = require("../../models/Clientes/cliente");


router.delete("/moto/:id", async (req, res) => {
  try {
    const motoId = req.params.id;
    const motoEliminada = await Moto.findByIdAndDelete(motoId);

    if (!motoEliminada) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }

    res.status(200).json({ message: "Moto eliminada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar la moto", error: error.message });
  }
});

module.exports = router;