const Role = require("../models/roleModel");
const mongoose = require("mongoose");

// read all heroes
const readRoles = async (req, res) => {
  const role = await Role.find({}).sort({ createdAt: -1 });

  res.status(200).json(role);
};

//read one hero

const readRole = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That role does not exist" });
  }

  const role = await Role.findById(id);

  if (!role) {
    return res.status(404).json({ error: "That role does not exist" });
  }

  res.status(200).json(role);
};

//create a new hero
const createRole = async (req, res) => {
  const { label } = req.body;

  try {
    const role = await Role.create({
      label
    });
    res.status(200).json(role);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateRole = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Role not found" });
  }

  const role = await Role.findOneAndUpdate(
    { _id: id },
    { ...req.body }
  );

  if (!role) {
    return res.status(404).json({ error:"Role not found" });
  }

  res.status(200).json({ message: "Role has been updated" });
};

// delete a user
const deleteRole = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Role not found" });
  }

  const role = await Role.findOneAndDelete({ _id: id });

  if (!role) {
    return res.status(400).json({ error: "Role not found" });
  }

  res.status(200).json({ message: "Role has been deleted" });
};

module.exports = {
  createRole,
  readRole,
  readRoles,
  updateRole,
  deleteRole
};
