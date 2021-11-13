// const { v4: uuidv4 } = require('uuid');

// const path = require('path');
// const fs = require('fs').promises;
// const contactsPath = path.resolve('./db/contacts.json');

// async function listContacts() {
//   try {
//     const data = await fs.readFile(contactsPath, 'utf8');
//     return JSON.parse(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// async function getContactById(contactId) {
//   const contacts = await listContacts();
//   const contact = contacts.filter(item => item.id === Number(contactId));
//   if (!contact) {
//     return;
//   }
//   console.table(contacts);
//   return contact;
// }

// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const contact = contacts.filter(item => item.id !== Number(contactId));
//   await fs.writeFile(contactsPath, JSON.stringify(contact, null));
//   console.table(contact);
//   return contact;
// }

// async function addContact(name, email, phone) {
//   const contacts = await listContacts();
//   const newContact = { id: uuidv4(), name, email, phone };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts));
//   return newContact;
// }

// module.exports = {
//     removeContact,
//     addContact,
// }