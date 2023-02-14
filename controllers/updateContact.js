const contactsOperations=require("../models/contacts")
const createError = require("http-errors");

const updateContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await contactsOperations.updateContact(contactId, req.body);
     if (!result) {
      throw createError(400, "Missing fields");
    }
    res.json({
      status: "succes",
      code: 200,
      data: { result },
    });
}

module.exports = updateContact;