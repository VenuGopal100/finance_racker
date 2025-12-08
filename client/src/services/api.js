// client/src/services/api.js
// Central Axios instance for calling the backend API.

import axios from "axios";

// 1. In development (local), we'll use localhost.
// 2. In production (Vercel), we'll set VITE_API_URL to the Render URL.

const baseURL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// For your deployed app, set in Vercel:
// VITE_API_URL = "https://finance-racker.onrender.com/api"

const api = axios.create({
  baseURL,
});

export default api;
