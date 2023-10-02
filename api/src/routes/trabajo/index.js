const { Router } = require("express");

const router = Router();

const postTrabajo = require("./postTrabajo");
const getTrabajo = require("./getTrabajo");
const putTrabajo = require("./putTrabajo");
const deleteTrabajo = require("./deleteTrabajo");

router.use("/", postTrabajo);
router.use("/", getTrabajo);
router.use("/", putTrabajo);
router.use("/", deleteTrabajo);

module.exports = router;
