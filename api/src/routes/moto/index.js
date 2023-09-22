const { Router } = require("express");

const router = Router();


const postMoto = require("./postMoto");
const getMoto = require("./getMoto");
const putMoto = require("./putMoto");
const deleteMoto = require("./deleteMoto");


router.use("/", postMoto);
router.use("/", getMoto);
router.use("/", putMoto);
router.use("/", deleteMoto);

module.exports = router;