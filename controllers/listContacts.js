const path = require('path');
const fs = require('fs').promises;
const contactsPath = path.join(__dirname, '../db/contacts.json');

// console.log("path.join() : ", path.join());
// console.log("path.resolve() : ", path.resolve());

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};


module.exports = listContacts;