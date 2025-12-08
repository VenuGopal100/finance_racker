// server/src/routes/transactionRoutes.js
// Routes for /api/transactions

import express from "express";
import {
  createTransaction,
  getTransactions,
} from "../controllers/transactionController.js";

const router = express.Router();

// GET all transactions
router.get("/", getTransactions);

// Create a new transaction
router.post("/", createTransaction);

export default router;
