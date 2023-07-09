const express = require("express");
const {
  createRank,
  readRank,
  readRanks,
  updateRank,
  deleteRank
} = require("../controllers/rankController");

const router = express.Router();

// View all users
router.get("/", readRanks);

// View 1 user
router.get("/:id", readRank);

// Create a new user
router.post("/", createRank);

// Update user
router.patch("/:id", updateRank);

// delete user
router.delete("/:id", deleteRank);

module.exports = router;
