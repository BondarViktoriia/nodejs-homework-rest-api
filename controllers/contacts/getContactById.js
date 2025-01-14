const { Contact } = require("../../models");
const RequestError = require("../../helpers/RequestError");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    status: "succes",
    code: 200,
    data: { result },
  });
};

module.exports = getContactById;
