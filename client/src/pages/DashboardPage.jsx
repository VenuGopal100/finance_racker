// client/src/pages/DashboardPage.jsx
// Dashboard page showing monthly summary and recent transactions.

import { useEffect, useState } from "react";
import api from "../services/api.js";
import TransactionsList from "../components/transactions/TransactionsList.jsx";

function DashboardPage() {
  const now = new Date();
  const [month] = useState(now.getMonth() + 1); // 1-12
  const [year] = useState(now.getFullYear());

  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSummary = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/summary/monthly", {
        params: { month, year },
      });

      const data = res.data?.data || res.data;
      setSummary(data);
    } catch (err) {
      console.error("Error fetching monthly summary:", err);
      setError("Could not load monthly summary. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value || 0);

  return (
    <section className="dashboard-page">
      <div className="card card-header-row">
        <div>
          <h2>Dashboard Overview</h2>
          <p>
            Summary for <strong>{month}/{year}</strong>
          </p>
        </div>
        <button className="btn-secondary" onClick={fetchSummary}>
          Refresh
        </button>
      </div>

      {loading && <p>Loading summary...</p>}
      {error && <p className="error-text">{error}</p>}

      {!loading && !error && summary && (
        <>
          {/* Top stats */}
          <div className="stats-grid">
            <div className="card stat-card">
              <h3>Total Income</h3>
              <p className="stat-value">
                {formatCurrency(summary.totalIncome)}
              </p>
            </div>
            <div className="card stat-card">
              <h3>Total Expenses</h3>
              <p className="stat-value">
                {formatCurrency(summary.totalExpense)}
              </p>
            </div>
            <div className="card stat-card">
              <h3>Balance</h3>
              <p className="stat-value">
                {formatCurrency(summary.balance)}
              </p>
            </div>
            <div className="card stat-card">
              <h3>Budget (This Month)</h3>
              {summary.budget ? (
                <>
                  <p className="stat-value">
                    {formatCurrency(summary.budget.amount)}
                  </p>
                  <p className="small-text">
                    Used: {formatCurrency(summary.budget.used)} • Remaining:{" "}
                    {formatCurrency(summary.budget.remaining)}
                  </p>
                </>
              ) : (
                <p className="small-text">No budget set yet.</p>
              )}
            </div>
          </div>

          {/* Recent transactions */}
          <div className="card">
            <div className="card-header-row">
              <h2>Recent Transactions</h2>
            </div>
            {summary.recentTransactions?.length ? (
              <TransactionsList transactions={summary.recentTransactions} />
            ) : (
              <p>No transactions yet for this month.</p>
            )}
          </div>
        </>
      )}
    </section>
  );
}

export default DashboardPage;
