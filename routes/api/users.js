const express = require("express");
const { ctrlWrapper, validation, auth } = require("../../middlewares");
const { users, currentUsers } = require("../../controllers");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post(
  "/signup",
  validation(schemas.joiSignupSchema),
  ctrlWrapper(users.signup)
);

router.post(
  "/login",
  validation(schemas.joiLoginSchema),
  ctrlWrapper(users.login)
);

router.get("/current", auth, ctrlWrapper(currentUsers.getCurrentUsers));

router.get("/logout", auth, ctrlWrapper(users.logout));

router.patch(
  "/:id/subscription",
  auth,
  validation(schemas.joiSubscriptionSchema),
  ctrlWrapper(users.updateSubscription)
);

module.exports = router;
