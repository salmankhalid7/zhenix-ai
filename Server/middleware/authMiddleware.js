const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.startsWith("Bearer") ? req.headers.authorization.split(" ")[1] : null;
    if (!token) return res.status(401).json({
      success: false,
      message: "Not authorized"
    });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Token failed"
    });
  }
};

module.exports = { protect };