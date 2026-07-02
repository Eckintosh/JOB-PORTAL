const express = require("express");
const {register, login, getMe} = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Placeholder test route
router.post("/register", register);
router.post("/login", login);
router.get("/me", protect, getMe);

module.exports = router;
