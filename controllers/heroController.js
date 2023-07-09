const Hero = require("../models/heroesModel");
const mongoose = require("mongoose");

// read all heroes
const readHeroes = async (req, res) => {
    const hero = await Hero.find({}).sort({createdAt: -1});

    res.status(200).json(hero);
}

//read one hero

const readHero = async (req,res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "That hero does not exist"});
    }

    const hero = await Hero.findById(id);

    if (!hero) {
        return res.status(404).json({error: "That hero does not exist"});
    }

    res.status(200).json(hero);
}

//create a new hero
const createHero = async (req, res) => {
 const { firstName, lastName, codeName, birthPlace, homeBase, age, height, description, backstory, difficulty, releaseDate, healthPoints, armor } = req.body;

 try {
   const hero = await Hero.create({
     firstName,
     lastName,
     codeName,
     birthPlace,
     homeBase,
     age,
     height,
     description,
     backstory,
     difficulty,
     releaseDate,
     healthPoints,
     armor,
   });
   res.status(200).json(hero);
 } catch (err) {
   res.status(400).json({ error: err.message });
 }
}

const updateHero = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Hero not found" });
  }

  const hero = await Hero.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Hero not found" });
  }

  res.status(200).json({ message: "Hero has been updated" });
};

// delete a user
const deleteHero = async (req, res) => {
    const {id} = req.params;

   if (!mongoose.Types.ObjectId.isValid(id)) {
     return res.status(404).json({ error: "Hero not found" });
   }
   
   const hero = await Hero.findOneAndDelete({_id: id});

   if (!user) {
     return res.status(400).json({ error: "Hero not found" });
   }

   res.status(200).json({message: "Hero has been deleted"})
}

module.exports = {
    readHeroes,
    readHero,
    createHero,
    updateHero,
    deleteHero
}