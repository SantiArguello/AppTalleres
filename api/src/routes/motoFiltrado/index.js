const { Router } = require("express");

const router = Router();


const putMotoFiltrado = require("./putMotofiltrado");
const getMotoFiltrado = require("./getMotoFiltrado");
const postMotoFiltrado = require("./postMotoFiltrado");
const deleteMotoFiltrado = require("./deleteMotoFiltrado");


router.use("/", putMotoFiltrado);
router.use("/", getMotoFiltrado);
router.use("/", postMotoFiltrado);
router.use("/", deleteMotoFiltrado);

module.exports = router;