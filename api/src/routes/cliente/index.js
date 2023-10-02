const { Router } = require("express");

const router = Router();


const postCliente = require("./postCliente");
const getCliente = require("./getCliente");
const putCliente = require("./putCliente");
const deleteCliente = require("./deleteCliente");

router.use("/", deleteCliente);
router.use("/", postCliente);
router.use("/", getCliente);
router.use("/", putCliente);

module.exports = router;