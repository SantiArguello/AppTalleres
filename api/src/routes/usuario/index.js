const { Router } = require("express");

const router = Router();

const postUsuario = require("./postUsuario");
const getUsuario = require("./getUsuario");
const putUsuario = require("./putUsuario");
const deleteUsuario = require("./deleteUsuario");

router.use("/", postUsuario);
router.use("/", getUsuario);
router.use("/", putUsuario);
router.use("/", deleteUsuario);

module.exports = router;
