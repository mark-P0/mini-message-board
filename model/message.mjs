/**
 * @typedef {Object} Message
 * @property {string} text
 * @property {string | null} user
 * @property {Date} added
 */

/** @type {Message[]} */
const messages = [];

/** Create */
export function postMessage(/** @type {Message} */ message) {
  messages.push(message);
}

/** Read */
export function retrieveMessages() {
  return [...messages];
}
