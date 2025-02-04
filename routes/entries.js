import express from "express";

const entries = [
  {
    date: "2023-01-01",
    owner: "Alice",
    text: "New Year's Day",
    tags: ["holiday", "celebration"],
  },
  {
    date: "2023-02-14",
    owner: "Bob",
    text: "Valentine's Day",
    tags: ["holiday", "love"],
  },
  {
    date: "2023-03-17",
    owner: "Charlie",
    text: "St. Patrick's Day",
    tags: ["holiday", "celebration"],
  },
  {
    date: "2023-04-01",
    owner: "Dave",
    text: "April Fool's Day",
    tags: ["holiday", "prank"],
  },
  {
    date: "2023-05-05",
    owner: "Eve",
    text: "Cinco de Mayo",
    tags: ["holiday", "celebration"],
  },
  {
    date: "2023-06-21",
    owner: "Frank",
    text: "First Day of Summer",
    tags: ["season", "summer"],
  },
  {
    date: "2023-07-04",
    owner: "Grace",
    text: "Independence Day",
    tags: ["holiday", "celebration"],
  },
  {
    date: "2023-10-31",
    owner: "Heidi",
    text: "Halloween",
    tags: ["holiday", "celebration"],
  },
  {
    date: "2023-11-24",
    owner: "Ivan",
    text: "Thanksgiving",
    tags: ["holiday", "family"],
  },
  {
    date: "2023-12-25",
    owner: "Judy",
    text: "Christmas",
    tags: ["holiday", "celebration"],
  },
];

const router = express.Router();

router.get("/", (req, res) => {
  console.log("🪩 GET /entries");
  res.status(200).json({ entries: entries });
});

export default router;
