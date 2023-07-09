const express = require("express");
const {
  createRole,
  readRole,
  readRoles,
  updateRole,
  deleteRole
} = require("../controllers/roleController");

const router = express.Router();

// View all users
router.get("/", readRoles);

// View 1 user
router.get("/:id", readRole);

// Create a new user
router.post("/", createRole);

// Update user
router.patch("/:id", updateRole);

// delete user
router.delete("/:id", deleteRole);

module.exports = router;
