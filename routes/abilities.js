const express = require("express");
const {
 createAbility,
 readAbilities,
 readAbility,
 updateAbility,
 deleteAbility
} = require("../controllers/abilityController");

const router = express.Router();

router.get("/", readAbilities);
router.get("/:id", readAbility);
router.post("/", createAbility);
router.patch("/id", updateAbility);
router.delete("/id", deleteAbility);

module.exports = router;
