const express = require("express");
const {
  createLoreVideo,
  readLoreVideo,
  updateLoreVideo,
  deleteLoreVideo,
  readLoreVideos,
} = require("../controllers/loreVideoController");

const router = express.Router();

// View all videos
router.get("/", readLoreVideos);

// View 1 video
router.get("/:id", readLoreVideo);

// Create a new video
router.post("/", createLoreVideo);

// Update video
router.patch("/:id", updateLoreVideo);

// delete video
router.delete("/:id", deleteLoreVideo);

module.exports = router;
