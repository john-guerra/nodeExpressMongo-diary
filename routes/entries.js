import express from "express";
import myDB from "../db/MyMongoDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("🪩 GET /entries");
  const entries = await myDB.getEntries({});
  console.log("🪩 GET /entries: got Entries", entries.length);
  res.status(200).json({ entries: entries });
});

export default router;
