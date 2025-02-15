import express from "express";
import myDB from "../db/MyMongoDB.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log("🪩 GET /entries req.query=", req.query, req.params, req.body);
  const page = req.query.page || 1;
  const docsPerPage = req.query.docsPerPage || 21;
  const entries = await myDB.getEntries({}, { page, docsPerPage });
  const totalDocs = await myDB.countEntries();
  console.log("🪩 GET /entries: got Entries", entries.length, {page, docsPerPage});
  res
    .status(200)
    .json({
      entries: entries,
      page,
      docsPerPage,
      totalDocs,
    });
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
