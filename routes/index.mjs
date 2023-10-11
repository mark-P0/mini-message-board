import express from "express";
import { retrieveMessages } from "../model/message.mjs";

const isDev = process.env["NODE_ENV"] === "DEVELOPMENT";

function formatDate(/** @type {Date} */ date) {
  return new Intl.DateTimeFormat("en-us", {
    timeStyle: "short",
    dateStyle: "short",
    hour12: false,
  }).format(date);
}

export const IndexRouter = express.Router();

/** GET home page. */
IndexRouter.get("/", (req, res, next) => {
  const messages = retrieveMessages()
    .reverse()
    .map((message) => ({
      ...message,
      added: formatDate(message.added),
    }));

  res.render("index", { isDev, messages });
});
