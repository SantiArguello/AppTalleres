const { Router } = require("express");

const router = Router();

const repuestos = require("./repuestosInsumos");

router.use("/", repuestos);

module.exports = router;