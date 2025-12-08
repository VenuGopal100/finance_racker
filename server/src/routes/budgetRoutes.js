// server/src/routes/budgetRoutes.js
// Routes for budget operations.

import express from "express";
import { getBudget, setOrUpdateBudget } from "../controllers/budgetController.js";

const router = express.Router();

// Create or update budget for a month
router.post("/", setOrUpdateBudget);

// Get budget for a month
router.get("/", getBudget);

export default router;
