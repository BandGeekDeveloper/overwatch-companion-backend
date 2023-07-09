const { response } = require("express");
const LoreVideo = require("../models/loreVideoModel");
const mongoose = require("mongoose");

// create a new video
const createLoreVideo = async (req, res) => {
  const { title, description, link } = req.body;

  try {
    const loreVideo = await LoreVideo.create({ title, description, link });
    res.status(200).json(loreVideo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// read all video
const readLoreVideos = async (req, res) => {
  const loreVideos = await LoreVideo.find({}).sort({ createdAt: -1 });

  res.status(200).json(loreVideos);
};

// read one video
const readLoreVideo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Video not found" });
  }

  const loreVideo = await LoreVideo.findById(id);

  if (!loreVideo) {
    return res.status(404).json({ error: "Video not found" });
  }

  res.status(200).json(loreVideo);
};

// update a video
const updateLoreVideo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Video not found" });
  }

  const user = await LoreVideo.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Video not found" });
  }

  res.status(200).json({ message: "Video has been updated" });
};

// delete a video
const deleteLoreVideo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Video not found" });
  }

  const loreVideo = await LoreVideo.findOneAndDelete({ _id: id });

  if (!loreVideo) {
    return res.status(400).json({ error: "Video not found" });
  }

  res.status(200).json({ message: "Video has been deleted" });
};

module.exports = {
  createLoreVideo,
  readLoreVideo,
  readLoreVideos,
  updateLoreVideo,
  deleteLoreVideo,
};
