// client/src/App.jsx
// Main layout + routes for the app.

import { NavLink, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import TransactionsPage from "./pages/TransactionsPage.jsx";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="logo">Finance Tracker</h1>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "nav-link nav-link-active" : "nav-link"
            }
          >
            Transactions
          </NavLink>
          {/* Later: Budgets, History etc. */}
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <small>Built with MERN • Deployment-focused</small>
      </footer>
    </div>
  );
}

export default App;
