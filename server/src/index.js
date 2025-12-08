// server/src/index.js
// Entry point of the backend server (Express app).

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import transactionRoutes from "./routes/transactionRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import summaryRoutes from "./routes/summaryRoutes.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Parse JSON bodies
app.use(express.json());

// CORS setup
// For a student project it's ok to allow all origins.
// (If you want stricter later, we can whitelist your Vercel URL.)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

// Health check root route
app.get("/", (req, res) => {
  res.json({ message: "Finance Tracker API is running 🚀" });
});

// API routes
app.use("/api/transactions", transactionRoutes);
app.use("/api/budgets", budgetRoutes);
app.use("/api/summary", summaryRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
