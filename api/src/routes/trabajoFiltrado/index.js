const { Router } = require("express");

const router = Router();

const trabajoFiltrado = require("./trabajoFiltrado");

router.use("/", trabajoFiltrado);

module.exports = router;