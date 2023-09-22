const { Router } = require("express");

const router = Router();


const postRepuestos = require("./postRepuestos");
const getRepuestos = require("./getRepuestos");
const putRepuestos = require("./putRepuestos");
const deleteRepuestos = require("./deleteRepuestos");


router.use("/", postRepuestos);
router.use("/", getRepuestos);
router.use("/", putRepuestos);
router.use("/", deleteRepuestos);

module.exports = router;