const { response } = require("express");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// create a new user
const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const user = await User.create({ username, email, password });
      res.status(200).json(user);
    } 
    catch (err) {
      res.status(400).json({ error: err.message });
    }
}

// read all users
const readUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1});

    res.status(200).json(users);
}

// read one user
const readUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "User not found"});
    }

    const user = await User.findById(id);

    if (!user) {
        return res.status(404).json({error: "User not found"});
    }

    res.status(200).json(user);
}

// update a user
const updateUser = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "User not found" });
    }

    const user = await User.findOneAndUpdate({_id: id}, {...req.body}); 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({message: "User has been updated"})
}

// delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "User not found" });
   }
   
   const user = await User.findOneAndDelete({_id: id});

   if (!user) {
     return res.status(400).json({ error: "User not found" });
   }

   res.status(200).json({message: "User has been deleted"})
}

module.exports = {
    createUser,
    readUsers,
    readUser,
    updateUser,
    deleteUser
}