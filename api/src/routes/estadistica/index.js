const { Router } = require("express");

const router = Router();

const deleteEstadistica = require("./deleteEstadistica");
const getEstadistica = require("./getEstadistica");
const postEstadistica = require("./postEstadistica");
const putEstadistica = require("./putEstadistica");

router.use("/", deleteEstadistica);
router.use("/", getEstadistica);
router.use("/", postEstadistica);
router.use("/", putEstadistica);

module.exports = router;
