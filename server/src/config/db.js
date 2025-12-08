// server/src/config/db.js
// This file handles the MongoDB connection using Mongoose.

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // MONGO_URI will come from .env file
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB;
