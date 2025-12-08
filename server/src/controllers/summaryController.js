// server/src/controllers/summaryController.js
// Controller for computing monthly summary for dashboard.

import Transaction from "../models/Transaction.js";
import Budget from "../models/Budget.js";

// GET /api/summary/monthly?month=&year=
export const getMonthlySummary = async (req, res) => {
  try {
    const now = new Date();

    const month =
      req.query.month != null
        ? parseInt(req.query.month, 10)
        : now.getMonth() + 1; // JS months 0-11

    const year =
      req.query.year != null ? parseInt(req.query.year, 10) : now.getFullYear();

    if (!month || !year) {
      return res.status(400).json({
        success: false,
        message: "Invalid month/year for summary",
      });
    }

    // Start and end of the month
    const startOfMonth = new Date(year, month - 1, 1);
    const endOfMonth = new Date(year, month, 0, 23, 59, 59, 999);

    // Fetch all transactions for this month
    const transactions = await Transaction.find({
      date: { $gte: startOfMonth, $lte: endOfMonth },
    }).sort({ date: -1 }); // latest first

    let totalIncome = 0;
    let totalExpense = 0;
    const categoryMap = {}; // for expense breakdown

    for (const tx of transactions) {
      if (tx.type === "income") {
        totalIncome += tx.amount;
      } else if (tx.type === "expense") {
        totalExpense += tx.amount;

        // accumulate category-wise expenses
        const cat = tx.category || "Other";
        categoryMap[cat] = (categoryMap[cat] || 0) + tx.amount;
      }
    }

    const balance = totalIncome - totalExpense;

    const categoryBreakdown = Object.entries(categoryMap).map(
      ([category, amount]) => ({
        category,
        amount,
      })
    );

    // Fetch budget for this month
    const budget = await Budget.findOne({ month, year });

    let budgetInfo = null;
    if (budget) {
      const used = totalExpense;
      const remaining = budget.amount - used;
      const percentUsed =
        budget.amount > 0 ? Math.min(100, (used / budget.amount) * 100) : 0;

      budgetInfo = {
        amount: budget.amount,
        used,
        remaining,
        percentUsed,
      };
    }

    return res.json({
      success: true,
      data: {
        month,
        year,
        totalIncome,
        totalExpense,
        balance,
        categoryBreakdown,
        budget: budgetInfo,
        recentTransactions: transactions.slice(0, 5), // last 5 for dashboard
      },
    });
  } catch (error) {
    console.error("Error getting monthly summary:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get monthly summary",
    });
  }
};
