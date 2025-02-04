import express from "express";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 3000;

const app = express();

import entriesRouter from "./routes/entries.js";

app.use("/api/entries/", entriesRouter);

app.use(express.static("frontend"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
