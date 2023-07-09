const express = require('express');
const {createUser, readUsers, readUser, updateUser, deleteUser} = require("../controllers/userController");

const router = express.Router();

// View all users
router.get("/", readUsers);

// View 1 user
router.get("/:id", readUser);

// Create a new user
router.post("/", createUser);

// Update user
router.patch("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;
