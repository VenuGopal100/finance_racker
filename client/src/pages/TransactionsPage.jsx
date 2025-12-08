// client/src/pages/TransactionsPage.jsx
// Page that shows a form to add transactions and a list of existing ones.

import { useEffect, useState } from "react";
import api from "../services/api.js";
import TransactionForm from "../components/transactions/TransactionForm.jsx";
import TransactionsList from "../components/transactions/TransactionsList.jsx";

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all transactions from backend
  const fetchTransactions = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/transactions");

      // Assuming backend returns: { success: true, data: [...] }
      const data = res.data?.data || res.data;
      setTransactions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Error fetching transactions:", err);
      setError("Could not load transactions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  // When a new transaction is created
  const handleTransactionAdded = (newTx) => {
    // Add it to the top of list
    setTransactions((prev) => [newTx, ...prev]);
  };

  return (
    <section className="transactions-page">
      <div className="card">
        <h2>Add Transaction</h2>
        <TransactionForm onTransactionAdded={handleTransactionAdded} />
      </div>

      <div className="card">
        <div className="card-header-row">
          <h2>All Transactions</h2>
          <button className="btn-secondary" onClick={fetchTransactions}>
            Refresh
          </button>
        </div>

        {loading && <p>Loading transactions...</p>}
        {error && <p className="error-text">{error}</p>}

        {!loading && !error && (
          <TransactionsList transactions={transactions} />
        )}
      </div>
    </section>
  );
}

export default TransactionsPage;
