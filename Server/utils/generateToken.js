const jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  // Add validation
  if (!userId) {
    throw new Error("User ID is required to generate token");
  }
  
  // Check if JWT_SECRET exists
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

module.exports=generateToken;