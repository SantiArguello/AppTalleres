const express = require("express");
const router = express.Router();

const clientesRoutes = require("./cliente");
const trabajoFiltradoRoutes = require("./trabajoFiltrado");
const repuestosInsumosRoutes = require("./repuestos");
const serviceRoutes = require("./service");
const agendaRoutes = require("./agenda");
const motoFiltradoRoutes = require("./motoFiltrado");
const motosRoutes = require("./moto");
const estadisticasRoutes = require("./estadistica");
const usuarioRoutes = require("./usuario");
const facturaRoutes = require('./Factura');
const trabajoRoutes = require("./trabajo");

router.use("/", clientesRoutes);
router.use("/", trabajoFiltradoRoutes);
router.use("/", repuestosInsumosRoutes);
router.use("/", serviceRoutes);
router.use("/", agendaRoutes);
router.use("/", motoFiltradoRoutes);
router.use("/", motosRoutes);
router.use("/", estadisticasRoutes);
router.use("/", usuarioRoutes);
router.use('/', facturaRoutes);
router.use("/", trabajoRoutes);

module.exports = router;
