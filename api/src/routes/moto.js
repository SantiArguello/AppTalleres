const express = require("express");
const router = express.Router();
const Moto = require("../models/Motos/moto");

router.post("/moto", async (req, res) => {
  try {
    const nuevaMoto = new Moto(req.body);
    await nuevaMoto.save();
    res.status(201).json(nuevaMoto);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al crear la moto", error: error.message });
  }
});

router.get("/moto", async (req, res) => {
  try {
    const motos = await Moto.find();
    res.status(200).json(motos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtener las motos", error: error.message });
  }
});

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
