const express = require("express");
const { ctrlWrapper,validation } = require("../../middlewares");
const { users:ctrl } = require("../../controllers");
const {schemas}=require("../../models/user")

const router = express.Router();

router.post("/signup", validation(schemas.joiSignupSchema), ctrlWrapper(ctrl.signup))

router.post("/login",validation(schemas.joiLoginSchema),ctrlWrapper(ctrl.login))

module.exports = router;