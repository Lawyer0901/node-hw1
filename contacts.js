const fs = require("fs");
const path = require("path");

contactsPath = path.resolve("./db/contacts.json");
const contacts = fs.readFile(contactsPath);

exports.module = contacts;

/*
 * Раскомментируй и запиши значение
 * const contactsPath = ;
 */

// // TODO: задокументировать каждую функцию
// function listContacts() {
//   // ...твой код
// }

// function getContactById(contactId) {
//   // ...твой код
// }

// function removeContact(contactId) {
//   // ...твой код
// }

// function addContact(name, email, phone) {
//   // ...твой код
// }
