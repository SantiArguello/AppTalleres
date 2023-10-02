const express = require("express");
const router = express.Router();

const Service = require("../../models/Service/service");

router.delete("/service/:id", async (req, res) => {
    try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ msg: "Service no encontrado" });
    }
    await service.remove();
    res.json({ msg: "Service eliminado correctamente" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Service no encontrado" });
    }
    res.status(500).send("Server Error");
  }

 });