const express = require("express");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.get("/profile", protect, async (req, res) => {
  res.status(200).json({ 
    success: true, 
    user: req.user });
});

module.exports = router;