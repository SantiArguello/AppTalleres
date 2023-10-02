const {Router} = require("express");
const router = Router();


const postAgenda = require("./postAgenda")
const getAgenda = require("./getAgenda")
const putAgenda = require("./putAgenda")
const deleteAgenda = require("./deleteAgenda")



router.use("/", postAgenda)
router.use("/", getAgenda)
router.use("/", putAgenda)
router.use("/", deleteAgenda)


module.exports = router;