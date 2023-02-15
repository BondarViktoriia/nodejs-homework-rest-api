const { Contact } = require("../models/contact");

const createError = require("http-errors");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json({
    status: "succes",
    code: 200,
    data: { result },
  });
};

module.exports = updateStatusContact;
