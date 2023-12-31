import cookieParser from "cookie-parser";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import path from "path";
import url from "url";
import { IndexRouter } from "./routes/index.mjs";
import { NewMessageRouter } from "./routes/new.mjs";

/** https://stackoverflow.com/a/50052194 */
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const app = express();

/** View engine setup */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(IndexRouter);
app.use(NewMessageRouter);

/** Catch 404 and forward to error handler */
app.use((req, res, next) => {
  next(createError(404));
});

/** Error handler */
app.use((err, req, res, next) => {
  /* Set locals, only providing error in development */
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  /* Render the error page */
  res.status(err.status || 500);
  res.render("error");
});
