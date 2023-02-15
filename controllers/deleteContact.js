const { Contact } = require("../models/contact");
const createError = require("http-errors");

const deleteContact = async (req, res) => {
     const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
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