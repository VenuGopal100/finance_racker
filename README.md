Finance Tracker (MERN Stack)

A full-stack Finance Tracker web application built using the MERN stack that helps users manage income, expenses, budgets, and view monthly financial summaries through a clean dashboard.

🔗 Live Demo
Frontend: (Vercel URL here)
Backend: https://finance-racker.onrender.com

🚀 Features

✅ Add income and expense transactions

✅ View all transactions in real time

✅ Monthly summary (total income, expenses, balance)

✅ Set and manage monthly budgets

✅ Dashboard with overview & recent transactions

✅ Fully deployed (Frontend + Backend + Database)

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
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   └── vite.config.js
│
├── server/                 # Backend (Node + Express)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
│   └── package.json
│
└── README.md

🌐 API Endpoints
Transactions

GET /api/transactions – Fetch all transactions

POST /api/transactions – Add a new transaction

Monthly Summary

GET /api/summary/monthly?month=MM&year=YYYY

Budgets

GET /api/budgets?month=MM&year=YYYY

POST /api/budgets – Set or update monthly budget

⚙️ Environment Variables
Backend (server/.env)
MONGO_URI=your_mongodb_atlas_url
PORT=5000

Frontend (Vercel Environment Variable)
VITE_API_URL=https://finance-racker.onrender.com/api

▶️ Run Locally
1️⃣ Backend
cd server
npm install
npm run dev

2️⃣ Frontend
cd client
npm install
npm run dev


Frontend will run on:
http://localhost:5173

Backend will run on:
http://localhost:5000

📦 Deployment

Backend deployed using Render

Frontend deployed using Vercel

Database hosted on MongoDB Atlas

Frontend communicates with backend via REST APIs

🎯 Learning Outcomes

MERN stack end-to-end integration

REST API design

MongoDB schema modelling

Environment variable management

CORS handling

Real-world deployment (Vercel + Render)

Production-ready project structure

👤 Author

Venu Gopal
B.Tech Student | MERN Stack Developer
GitHub: https://github.com/VenuGopal100
