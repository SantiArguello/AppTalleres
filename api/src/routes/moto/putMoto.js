const express = require("express");
const router = express.Router();
const Moto = require("../../models/Motos/moto");
const Cliente = require("../../models/Clientes/cliente");


router.put("/moto/:id", async (req, res) => {
  try {
    const motoId = req.params.id;
    const motoActualizada = await Moto.findByIdAndUpdate(motoId, req.body, {
      new: true,
    });

    if (!motoActualizada) {
      return res.status(404).json({ message: "Moto no encontrada" });
    }

    res.status(200).json(motoActualizada);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar la moto", error: error.message });
  }
});

module.exports = router;
