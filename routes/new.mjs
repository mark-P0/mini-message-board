import { Router } from "express";

const isDev = process.env["NODE_ENV"] === "DEVELOPMENT";

export const NewMessageRouter = Router();

NewMessageRouter.get("/", (req, res, next) => {
  res.render("new", { isDev });
});
