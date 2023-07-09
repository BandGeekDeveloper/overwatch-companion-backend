const express = require("express");
const {readHeroes, readHero, createHero, updateHero, deleteHero} = require("../controllers/heroController")

const router = express.Router();

router.get("/", readHeroes);
router.get("/:id", readHero);
router.post("/", createHero);
router.patch("/id", updateHero);
router.delete("/id", deleteHero);

module.exports = router;