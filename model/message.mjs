/**
 * @typedef {Object} Message
 * @property {string} text
 * @property {string | null} user
 * @property {Date} added
 */

/** @type {Message[]} */
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/** Create */
export function postMessage(/** @type {Message} */ message) {
  messages.push(message);
}

/** Read */
export function retrieveMessages() {
  return [...messages];
}
