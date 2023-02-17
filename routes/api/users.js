const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { users:ctrl } = require("../../controllers");


const router = express.Router();

router.post("/signup",ctrlWrapper(ctrl.signup))

module.exports = router;