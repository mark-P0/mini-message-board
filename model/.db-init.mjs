import "dotenv/config";
import mongoose from "mongoose";

/**
 * Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
 * Included because it removes preparatory warnings for Mongoose 7.
 * See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
 */
mongoose.set("strictQuery", false);

/** @returns {never} */
function raise(/** @type {string} */ msg) {
  throw new Error(msg);
}

const { URI } = process.env;
URI ?? raise("URI does not exist!");

try {
  console.log(`Connecting to ${URI}...`);
  await mongoose.connect(URI);
  console.log("Connected.");
} catch (error) {
  console.error("Connection failed!", error);
  throw error;
}
