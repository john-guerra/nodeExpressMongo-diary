import express from "express";
import myDB from "../db/MyMongoDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("🪩 GET /entries");
  const entries = await myDB.getEntries({});
  console.log("🪩 GET /entries: got Entries", entries.length);
  res.status(200).json({ entries: entries });
});

router.post("/create", async (req, res) => {
  console.log("🪩 POST /entries/create", req.body);
  const { date, text, owner } = req.body;
  const newEntry = { date, text, owner };
  console.log("🪩 POST /entries/create: newEntry", newEntry);
  const result = await myDB.createEntry(newEntry);
  console.log("🪩 POST /entries/create: result", result);
  res.redirect("/");
});

export default router;
