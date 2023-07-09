const Ability = require("../models/abilityModel");
const mongoose = require("mongoose");

// read all heroes
const readAbilities = async (req, res) => {
  const ability = await Ability.find({}).sort({ createdAt: -1 });

  res.status(200).json(ability);
};

//read one hero

const readAbility = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That ability does not exist" });
  }

  const ability = await Ability.findById(id);

  if (!ability) {
    return res.status(404).json({ error: "That ability does not exist" });
  }

  res.status(200).json(ability);
};

//create a new hero
const createAbility = async (req, res) => {
  const { name, type, isMain, isSecondary, clipSize, fireRate, canHeadshot, projectileSpeed, duration, cooldown, radius, isDamage, isHeal, isSupport, isPassive, hitPoints, healingPoints, description } = req.body;

  try {
    const ability = await Ability.create({
    name,
    type,
    isMain,
    isSecondary,
    clipSize,
    fireRate,
    projectileSpeed,
    duration,
    cooldown,
    radius,
    canHeadshot,
    isDamage,
    isHeal,
    isSupport,
    isPassive,
    hitPoints,
    healingPoints,
    description
    });
    res.status(200).json(ability);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateAbility = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Ability not found" });
  }

  const ability = await Ability.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!ability) {
    return res.status(404).json({ error: "Ability not found" });
  }

  res.status(200).json({ message: "Ability has been updated" });
};

// delete a user
const deleteAbility = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Ability not found" });
  }

  const ability = await Ability.findOneAndDelete({ _id: id });

  if (!ability) {
    return res.status(400).json({ error: "Ability not found" });
  }

  res.status(200).json({ message: "Ability has been deleted" });
};

module.exports = {
createAbility,
readAbilities,
readAbility,
updateAbility,
deleteAbility
};
