// server/src/controllers/budgetController.js
// Controller functions for creating and fetching monthly budgets.

import Budget from "../models/Budget.js";

// POST /api/budgets
// Create or update a monthly budget.
export const setOrUpdateBudget = async (req, res) => {
  try {
    const { month, year, amount } = req.body;

    if (!month || !year || amount == null) {
      return res.status(400).json({
        success: false,
        message: "month, year and amount are required",
      });
    }

    const numericAmount = Number(amount);

    const budget = await Budget.findOneAndUpdate(
      { month, year },
      { amount: numericAmount },
      {
        new: true,
        upsert: true, // create if not exist
        setDefaultsOnInsert: true,
      }
    );

    return res.json({
      success: true,
      data: budget,
    });
  } catch (error) {
    console.error("Error setting budget:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to set budget",
    });
  }
};

// GET /api/budgets?month=&year=
// Get budget for a given month/year.
export const getBudget = async (req, res) => {
  try {
    const month = parseInt(req.query.month, 10);
    const year = parseInt(req.query.year, 10);

    if (!month || !year) {
      return res.status(400).json({
        success: false,
        message: "month and year are required as query params",
      });
    }

    const budget = await Budget.findOne({ month, year });

    return res.json({
      success: true,
      data: budget || null,
    });
  } catch (error) {
    console.error("Error getting budget:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get budget",
    });
  }
};
