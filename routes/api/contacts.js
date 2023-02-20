const express = require("express");
const { schemas } = require("../../models/contact");
const {
  contacts:ctrl
} = require("../../controllers");
const { validation, ctrlWrapper, isValidId,auth } = require("../../middlewares");

const router = express.Router();

router.get("/",auth, ctrlWrapper(ctrl.listContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  validation(schemas.contactSchemaJoi),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.deleteContact));

router.put(
  "/:contactId",
  isValidId,
  validation(schemas.contactSchemaJoi),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schemas.updateFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
