const express = require("express");
const { schemas} = require("../../models/contact");
const {  addContact } = require("../../controllers");
const {validation,ctrlWrapper}=require("../../middlewares")

const router = express.Router();


// router.get("/", ctrlWrapper(listContacts));

// router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/", validation(schemas.contactSchemaJoi), ctrlWrapper(addContact));

// router.delete("/:contactId", ctrlWrapper(deleteContact))


// router.put("/:contactId", validation(contactSchema), ctrlWrapper(updateContact));


module.exports = router;
