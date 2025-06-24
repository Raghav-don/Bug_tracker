const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

// CORS Middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));