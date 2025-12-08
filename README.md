💰 Finance Tracker – MERN Stack Application

A full-stack Finance Tracker web application built using the MERN stack.
This app helps users track income and expenses, set monthly budgets, and view a financial summary through a clean, modern dashboard.

✅ Fully developed, integrated, and deployed.

🌐 Live Deployment (Try It Now)

🔹 Live Frontend (User Interface)
👉 https://your-frontend-name.vercel.app

🔹 Live Backend (API Service)
👉 https://finance-racker.onrender.com

🔹 Sample API Endpoint
👉 https://finance-racker.onrender.com/api/transactions

Anyone can open the frontend link in a browser and use the application directly.

🚀 Features

✅ Add income and expense transactions

✅ View all transactions in real time

✅ Monthly financial summary (income, expense, balance)

✅ Set and update monthly budgets

✅ Dashboard with recent transactions

✅ REST API integration

✅ Fully deployed frontend, backend, and database

🛠 Tech Stack
Frontend

React (Vite)

Axios

Custom CSS

Deployed on Vercel

Backend

Node.js

Express.js

MongoDB (Atlas)

Mongoose

Deployed on Render

📁 Project Structure
finance_racker/
│
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Pages (Dashboard, Transactions, Budgets)
│   │   ├── services/       # Axios API setup
│   │   └── styles/         # Global & component styles
│   └── vite.config.js
│
├── server/                 # Backend (Node + Express)
│   ├── src/
│   │   ├── controllers/    # Business logic
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API routes
│   │   └── index.js        # Server entry point
│   └── package.json
│
└── README.md

🌍 API Endpoints
Transactions

GET /api/transactions – Fetch all transactions

POST /api/transactions – Add a new transaction

Monthly Summary

GET /api/summary/monthly?month=MM&year=YYYY

Budgets

GET /api/budgets?month=MM&year=YYYY

POST /api/budgets – Create or update monthly budget

⚙️ Environment Variables
Backend (server/.env)
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000

Frontend (Vercel Environment Variable)
VITE_API_URL=https://finance-racker.onrender.com/api

▶️ Run the Project Locally
1️⃣ Start Backend
cd server
npm install
npm run dev


Backend runs at:
http://localhost:5000

2️⃣ Start Frontend
cd client
npm install
npm run dev


Frontend runs at:
http://localhost:5173

🚢 Deployment Details

Frontend → Vercel

Backend → Render

Database → MongoDB Atlas

Frontend communicates with backend using REST APIs

Environment variables handle dev vs production URLs

CORS configured for cross-platform deployment

📤 How to Share This Project with Others
✅ For normal users / friends

Just send:

https://your-frontend-name.vercel.app

✅ For recruiters / interviewers

Send all three:

Live App: https://your-frontend-name.vercel.app
Backend API: https://finance-racker.onrender.com
GitHub Repo: https://github.com/VenuGopal100/finance_racker


This proves:

Real deployment

Backend + database working

Production-ready MERN project

🎯 What I Learned from This Project

End-to-end MERN stack integration

REST API development

MongoDB schema design

Environment variable management

CORS handling

Cloud deployment (Vercel + Render)

Debugging real production issues

👤 Author

Venu Gopal
B.Tech Student | MERN Stack Developer
GitHub: https://github.com/VenuGopal100
