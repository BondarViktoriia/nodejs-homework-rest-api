const express = require("express");
const { schemas} = require("../../models/contact");
const {  addContact,listContacts,getContactById,updateContact,deleteContact, updateStatusContact} = require("../../controllers");
const {validation,ctrlWrapper,isValidId}=require("../../middlewares")

const router = express.Router();


router.get("/", ctrlWrapper(listContacts));

router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/",isValidId, validation(schemas.contactSchemaJoi), ctrlWrapper(addContact));

router.delete("/:contactId", ctrlWrapper(deleteContact))

router.put("/:contactId",validation(schemas.contactSchemaJoi), ctrlWrapper(updateContact));

router.patch("/:contactId/favorite",validation(schemas.updateFavoriteSchema),ctrlWrapper( updateStatusContact))


module.exports = router;
