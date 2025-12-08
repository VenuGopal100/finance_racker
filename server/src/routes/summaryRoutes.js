// server/src/routes/summaryRoutes.js
// Routes for summary endpoints (dashboard).

import express from "express";
import { getMonthlySummary } from "../controllers/summaryController.js";

const router = express.Router();

// GET /api/summary/monthly
router.get("/monthly", getMonthlySummary);

export default router;
