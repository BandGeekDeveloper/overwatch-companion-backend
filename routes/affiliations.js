const express = require("express");
const {
   createAffiliation,
   readAffiliation,
   readAffiliations,
   updateAffiliation,
   deleteAffiliation
} = require("../controllers/affiliationController");

const router = express.Router();

router.get("/", readAffiliations);
router.get("/:id", readAffiliation);
router.post("/", createAffiliation);
router.patch("/id", updateAffiliation);
router.delete("/id", deleteAffiliation);

module.exports = router;
