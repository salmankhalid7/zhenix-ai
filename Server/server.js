const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const aiRoutes = require("./routes/aiRoutes.js");

const connectDB = require("./config/db.js");

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.status(200).json({ 
    message: "Zhenix API is live!", 
    status: "Healthy" 
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/ai", aiRoutes);

const PORT = process.env.PORT || 8000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});