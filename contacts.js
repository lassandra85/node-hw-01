/* import fs from 'fs'; */
/* import path from 'path'; */

const fs = require("fs").promises;
const path = require("path");
const {nanoid} = require("nanoid");

const contactsPath = path.join(__dirname, 'db', 'contacts.json');


const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
    const data = await listContacts();
    const result = data.find(contact => contact.id === contactId);
    return result || null;
};

const addContact = async ({ data }) => {
  const contacts = await listContacts();
  const newContact = { id: nanoid(), ...data, };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
};

/* function removeContact(contactId) {
  // ...твій код
}
 */


module.exports = {listContacts,getContactById,addContact,};