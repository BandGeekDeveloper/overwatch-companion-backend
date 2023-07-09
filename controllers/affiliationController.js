const Affiliation = require("../models/affiliationModel");
const mongoose = require("mongoose");

// read all heroes
const readAffiliations = async (req, res) => {
  const affiliation = await Affiliation.find({}).sort({ createdAt: -1 });

  res.status(200).json(affiliation);
};

//read one hero

const readAffiliation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That affiliation does not exist" });
  }

  const affiliation = await Affiliation.findById(id);

  if (!affiliation) {
    return res.status(404).json({ error: "That affiliation does not exist" });
  }

  res.status(200).json(affiliation);
};

//create a new hero
const createAffiliation = async (req, res) => {
  const {
  name,
  description,
  location,
  leader
  } = req.body;

  try {
    const affiliation = await Affiliation.create({
     name,
     description,
     location,
     leader
    });
    res.status(200).json(affiliation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateAffiliation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Affiliation not found" });
  }

  const affiliation = await Affiliation.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!affiliation) {
    return res.status(404).json({ error: "Affiliation not found" });
  }

  res.status(200).json({ message: "Affiliation has been updated" });
};

// delete a user
const deleteAffiliation = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Affiliation not found" });
  }

  const affiliation = await Affiliation.findOneAndDelete({ _id: id });

  if (!affiliation) {
    return res.status(400).json({ error: "Affiliation not found" });
  }

  res.status(200).json({ message: "Affiliation has been deleted" });
};

module.exports = {
 createAffiliation,
 readAffiliation,
 readAffiliations,
 updateAffiliation,
 deleteAffiliation
};
