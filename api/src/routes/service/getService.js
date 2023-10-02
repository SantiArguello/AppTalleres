const express = require("express");
const router = express.Router();
const Service = require("../../models/Service/service");


// Ruta para obtener todos los servicios

router.get("/service", async (req, res) => {
  try {
    const servicios = await Service.find();
    res.status(200).json(servicios);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error al obtener los servicios",
        error: error.message,
      });
  }
});

module.exports=router;