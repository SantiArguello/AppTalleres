const { Router } = require("express");

const router = Router();


const postTrabajoFiltrado = require("./postTrabajoFiltrado");
const getTrabajoFiltrado = require("./getTrabajoFiltrado");
const putTrabajoFiltrado = require("./putTrabajoFiltrado");
const deleteTrabajoFiltrado = require("./deleteTrabajoFiltrado");


router.use("/", postTrabajoFiltrado);
router.use("/", getTrabajoFiltrado);
router.use("/", putTrabajoFiltrado);
router.use("/", deleteTrabajoFiltrado);

module.exports = router;