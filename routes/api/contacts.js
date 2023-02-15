const express = require("express");
const { schemas} = require("../../models/contact");
const {  addContact,listContacts,getContactById,updateContact,deleteContact, updateStatusContact} = require("../../controllers");
const { validation, ctrlWrapper, isValidId } = require("../../middlewares");

const router = express.Router();


router.get("/", ctrlWrapper(listContacts));

router.get("/:contactId",isValidId, ctrlWrapper(getContactById));

router.post("/",isValidId, validation(schemas.contactSchemaJoi), ctrlWrapper(addContact));

router.delete("/:contactId",isValidId, ctrlWrapper(deleteContact))

router.put("/:contactId",isValidId,validation(schemas.contactSchemaJoi), ctrlWrapper(updateContact));

router.patch("/:contactId/favorite",isValidId,validation(schemas.updateFavoriteSchema),ctrlWrapper( updateStatusContact))


module.exports = router;
