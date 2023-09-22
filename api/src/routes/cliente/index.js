const { Router } = require("express");

const router = Router();


const postCliente = require("./postCliente");
const getCliente = require("./getCliente");
const putCliente = require("./putCliente");


router.use("/", postCliente);
router.use("/", getCliente);
router.use("/", putCliente);

module.exports = router;