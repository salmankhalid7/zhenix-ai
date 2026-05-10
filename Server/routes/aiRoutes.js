const express = require("express");
const { reviewCode } = require("../controllers/aiController");

const router = express.Router();

router.post("/get-response", reviewCode);

module.exports = router;