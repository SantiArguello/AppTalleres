const { Router } = require("express");

const router = Router();


const postService = require("./postService");
const getService = require("./getService");
const putService = require("./putService");


router.use("/", postService);
router.use("/", getService);
router.use("/", putService);

module.exports = router;