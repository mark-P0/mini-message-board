import { Schema, model } from "mongoose";
import "./.db-init.mjs";

/**
 * @typedef {Object} TMessage
 * @property {string} text
 * @property {string | null} user
 * @property {Date} added
 */

/** @type {Schema<TMessage>} */
const MessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, default: null },
  added: { type: Date, required: true },
});

/**
 * Kind of a hacky way to get a proper return type...
 *
 * @type {ReturnType<typeof model<TMessage>>}
 */
const Message = model("Message", MessageSchema);

/** Create */
export async function postMessage(/** @type {TMessage} */ message) {
  try {
    const doc = new Message(message);
    doc.save();
  } catch (error) {
    console.error(`Could not save message ${message}`);
    throw error;
  }
}

/** Read
 *
 * @returns {Promise<TMessage[]>}
 */
export async function retrieveMessages() {
  /**
   * - Filter-less syntax gets ALL documents
   * - Lean query keeps only few properties
   *
   * https://mongoosejs.com/docs/api/model.html#Model.find()
   */
  const query = Message.find({}).lean();
  const res = await query.exec();

  return res.map(({ text, user, added }) => ({ text, user, added }));
}
