import express from "express";

const isDev = process.env["NODE_ENV"] === "DEVELOPMENT";

export const IndexRouter = express.Router();

/** GET home page. */
IndexRouter.get("/", (req, res, next) => {
  res.render("index", { isDev });
});
