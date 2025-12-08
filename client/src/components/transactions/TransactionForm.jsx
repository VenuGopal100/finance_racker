// client/src/components/transactions/TransactionForm.jsx
// Form to create a new transaction and send it to the backend.

import { useState } from "react";
import api from "../../services/api.js";

function TransactionForm({ onTransactionAdded }) {
  const [form, setForm] = useState({
    type: "expense",
    amount: "",
    category: "",
    date: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation on frontend
    if (!form.type || !form.amount || !form.category || !form.date) {
      setError("Please fill type, amount, category and date.");
      return;
    }

    try {
      setLoading(true);

      // Send data to backend
      const res = await api.post("/transactions", {
        ...form,
        amount: Number(form.amount),
      });

      const created = res.data?.data || res.data;

      // Inform parent (TransactionsPage) about new transaction
      if (created && onTransactionAdded) {
        onTransactionAdded(created);
      }

      // Reset form
      setForm({
        type: "expense",
        amount: "",
        category: "",
        date: "",
        description: "",
      });
    } catch (err) {
      console.error("Error creating transaction:", err);
      setError("Could not save transaction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      {error && <p className="error-text">{error}</p>}

      <div className="form-row">
        <label>
          Type
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </label>

        <label>
          Amount
          <input
            type="number"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            placeholder="0"
            min="0"
            step="0.01"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Category
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="e.g. Food, Rent, Salary"
          />
        </label>

        <label>
          Date
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        Description (optional)
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short note about this transaction"
        />
      </label>

      <button className="btn-primary" type="submit" disabled={loading}>
        {loading ? "Saving..." : "Add Transaction"}
      </button>
    </form>
  );
}

export default TransactionForm;
