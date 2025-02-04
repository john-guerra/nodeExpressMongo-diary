import express from "express";
const PORT = process.env.PORT || 3000;

const app = express();

import entriesRouter from "./routes/entries.js";

app.use("/api/entries/", entriesRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
