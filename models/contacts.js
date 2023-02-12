const fs = require('fs/promises');
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "contacts.json");


const listContacts = async () => {
const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
  return contacts;
}

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const result = contacts.find(item => item.id === contactId);
    if(!result){
        return null;
    }
  return result;
}

const removeContact = async (contactId) => {}

const addContact = async (body) => {
  const contacts = await listContacts()
  const newContact = { ...body, id: v4() };
  contacts.push(newContact);
  return contacts;
}

const updateContact = async (contactId, body) => {}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
