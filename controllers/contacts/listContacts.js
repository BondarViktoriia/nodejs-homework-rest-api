const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const contacts = await Contact.find({}, "-createdAt -updatedAt");
  res.json({
    status: "succes",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = listContacts;