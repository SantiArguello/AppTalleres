const { Router } = require("express");

const router = Router();

const service = require("./service");

router.use("/", service);

module.exports = router;