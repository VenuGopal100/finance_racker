// server/src/controllers/transactionController.js
// Controller functions for transaction routes.

import Transaction from "../models/Transaction.js";

// POST /api/transactions
export const createTransaction = async (req, res) => {
  try {
    const { type, amount, category, date, description } = req.body;

    // Basic validation
    if (!type || !amount || !category || !date) {
      return res.status(400).json({
        success: false,
        message: "type, amount, category and date are required",
      });
    }

    const transaction = await Transaction.create({
      type,
      amount,
      category,
      date,
      description,
    });

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    console.error("Error creating transaction:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating transaction",
    });
  }
};

// GET /api/transactions
export const getTransactions = async (req, res) => {
  try {
    // Later we can add filters (month, type, category)
    const transactions = await Transaction.find().sort({
      date: -1,
      createdAt: -1,
    });

    return res.json({
      success: true,
      data: transactions,
    });
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while fetching transactions",
    });
  }
};
