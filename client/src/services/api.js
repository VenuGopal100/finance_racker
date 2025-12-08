// client/src/services/api.js
// Axios instance used for all API calls (transactions, budgets, summary).

import axios from "axios";

// For development: VITE_API_BASE_URL will be something like "http://localhost:5000/api"
// For production: it will be your deployed backend URL, e.g. "https://finance-backend.onrender.com/api"
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Optional: you can log the base URL once to confirm
// console.log("API base URL:", API_BASE_URL);

export default api;
