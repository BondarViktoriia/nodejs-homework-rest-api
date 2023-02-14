const express = require("express");
const { contactSchema } = require("../../contactSchema");
const {  addContact,
    deleteContact,
    getContactById,
    listContacts,
    updateContact } = require("../../controllers");
const {validation,ctrlWrapper}=require("../../middlewares")

const router = express.Router();


router.get("/", ctrlWrapper(listContacts));

router.get("/:contactId", ctrlWrapper(getContactById));

router.post("/", validation(contactSchema), ctrlWrapper(addContact));

router.delete("/:contactId", ctrlWrapper(deleteContact))


router.put("/:contactId", validation(contactSchema), ctrlWrapper(updateContact));


module.exports = router;
