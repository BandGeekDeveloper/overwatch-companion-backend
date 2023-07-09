const Rank = require("../models/rankModel");
const mongoose = require("mongoose");

// create a new user
const createRank = async (req, res) => {
    const { label } = req.body;

    try {
      const rank = await Rank.create({ label });
      res.status(200).json(rank);
    } 
    catch (err) {
      res.status(400).json({ error: err.message });
    }
}

// read all ranks
const readRanks = async (req, res) => {
    const ranks = await Rank.find({}).sort({createdAt: -1});

    res.status(200).json(ranks);
}

// read one rank
const readRank = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "Rank does not exist"});
    }

    const rank = await Rank.findById(id);

    if (!rank) {
        return res.status(404).json({error: "Rank does not exist"});
    }

    res.status(200).json(rank);
}

// update a rank
const updateRank = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Rank does not exist" });
    }

    const rank = await Rank.findOneAndUpdate({_id: id}, {...req.body}); 

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Rank does not exist" });
    }

    res.status(200).json({message: "Rank has been updated"})
}

// delete a user
const deleteRank = async (req, res) => {
    const {id} = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "Rank does not exist" });
   }
   
   const rank = await Rank.findOneAndDelete({_id: id});

   if (!rank) {
     return res.status(400).json({ error: "Rank does not exist" });
   }

   res.status(200).json({message: "Rank has been deleted"})
}

module.exports = {
    createRank,
    readRank,
    readRanks,
    updateRank,
    deleteRank
}

