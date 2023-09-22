const { Router } = require("express");

const router = Router();

const motoFiltrado = require("./motoFiltrado");

router.use("/", motoFiltrado);

module.exports = router;