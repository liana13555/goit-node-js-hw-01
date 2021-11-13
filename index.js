const contactOperations = require('./controllers');

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
      case 'list':
          const contacts = await contactOperations.listContacts();
          console.table(contacts);
          break;

    case 'get':
          const contactById = await contactOperations.getContactById(id);
          console.table(contactById);
      break;

    case 'add':
          const newContact = await contactOperations.addContact(name, email, phone);
          console.table(newContact);
      break;

    case 'remove':
          const deletedContact = await contactOperations.removeContact(id);
          console.table(deletedContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

(async () => {
  await invokeAction(argv)
})();
