// server/src/models/Budget.js
// Mongoose model for storing monthly budget.

import mongoose from "mongoose";

const budgetSchema = new mongoose.Schema(
  {
    month: {
      type: Number, // 1 - 12
      required: true,
      min: 1,
      max: 12,
    },
    year: {
      type: Number,
      required: true,
      min: 1970,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Ensure only one budget per (month, year)
budgetSchema.index({ month: 1, year: 1 }, { unique: true });

const Budget = mongoose.model("Budget", budgetSchema);

export default Budget;
