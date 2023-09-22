const {Router} = require("express");
const router = Router();

const agenda = require("./agenda")


router.use("/", agenda)


module.exports = router;