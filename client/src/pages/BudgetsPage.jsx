
// client/src/pages/BudgetsPage.jsx
// Page to set and view the monthly budget.

import { useEffect, useState } from "react";
import api from "../services/api.js";

function BudgetsPage() {
  const now = new Date();
  const [month] = useState(now.getMonth() + 1);
  const [year] = useState(now.getFullYear());

  const [amount, setAmount] = useState("");
  const [currentBudget, setCurrentBudget] = useState(null);

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const fetchBudget = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/budgets", {
        params: { month, year },
      });

      const data = res.data?.data || null;
      setCurrentBudget(data);
      if (data) {
        setAmount(data.amount);
      }
    } catch (err) {
      console.error("Error fetching budget:", err);
      setError("Could not load budget. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBudget();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setError("");

    if (!amount || Number(amount) < 0) {
      setError("Please enter a valid budget amount.");
      return;
    }

    try {
      setSaving(true);

      const res = await api.post("/budgets", {
        month,
        year,
        amount: Number(amount),
      });

      const data = res.data?.data || null;
      setCurrentBudget(data);
      setSuccessMsg("Budget saved successfully.");
    } catch (err) {
      console.error("Error saving budget:", err);
      setError("Could not save budget. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="budgets-page">
      <div className="card">
        <div className="card-header-row">
          <div>
            <h2>Monthly Budget</h2>
            <p>
              Budget for <strong>{month}/{year}</strong>
            </p>
          </div>
          <button className="btn-secondary" onClick={fetchBudget}>
            Refresh
          </button>
        </div>

        {loading && <p>Loading budget...</p>}
        {error && <p className="error-text">{error}</p>}
        {successMsg && <p className="success-text">{successMsg}</p>}

        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount">Budget Amount (₹)</label>
            <input
              id="amount"
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter monthly budget"
            />
          </div>

          <button className="btn-primary" type="submit" disabled={saving}>
            {saving ? "Saving..." : "Save Budget"}
          </button>
        </form>

        {currentBudget && (
          <p className="small-text">
            Current budget for {month}/{year}: <strong>₹{currentBudget.amount}</strong>
          </p>
        )}
      </div>
    </section>
  );
}

export default BudgetsPage;
