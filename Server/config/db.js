const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.MONGO_DB, 
    });
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.log("Mongoose connection Error!", error);
    process.exit(1);
  }
};

module.exports = connectDB;