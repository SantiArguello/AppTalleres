const { Router } = require("express")
const router = Router()

const getFactura = require("./getFactura")
const putFactura = require("./putFactura")
const postFactura = require("./postFactura")
const deleteFactura = require("./deleteFactura")

router.use("/", getFactura)
router.use("/", putFactura)
router.use("/", postFactura)
router.use("/", deleteFactura)

module.exports = router