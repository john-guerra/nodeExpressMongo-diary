import express from "express";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 3000;

const app = express();

import entriesRouter from "./routes/entries.js";


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("frontend"));
app.use(cookieParser());

app.use("/api/entries/", entriesRouter);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});

export default app;
