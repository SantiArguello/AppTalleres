const { Router } = require("express");

const router = Router();
const moto = require("./moto");

router.use("/", moto);

module.exports = router;