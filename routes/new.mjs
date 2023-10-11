import { Router } from "express";
import { postMessage } from "../model/message.mjs";

const isDev = process.env["NODE_ENV"] === "DEVELOPMENT";

export const NewMessageRouter = Router();

NewMessageRouter.get("/", (req, res, next) => {
  res.render("new", { isDev });
});

NewMessageRouter.post("/", (req, res, next) => {
  try {
    let { user, text } = req.body;
    const added = new Date();

    if (user === "") user = null;
    text ?? raise("Must have message");

    postMessage({ user, text, added });
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.redirect("/new");
  }
});
