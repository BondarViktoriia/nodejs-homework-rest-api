const contactsOperations=require("../models/contacts")
const createError = require("http-errors");

const deleteContact = async (req, res) => {
     const { contactId } = req.params;
    const result = await contactsOperations.removeContact(contactId);
    if (!result) {
      throw createError(404, "Not found");
    }
    res.json({
        status: "succes",
        code: 200,
        message: "contact deleted",
        data: { result },
    })
}

module.exports = deleteContact;