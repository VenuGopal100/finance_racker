// client/src/components/transactions/TransactionsList.jsx
// Simple list/table to display transactions from backend.

function formatDate(dateString) {
  if (!dateString) return "";
  const d = new Date(dateString);
  return d.toLocaleDateString();
}

function TransactionsList({ transactions }) {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions yet. Add your first one above.</p>;
  }

  return (
    <div className="transactions-list">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx._id}>
              <td>{formatDate(tx.date)}</td>
              <td className={tx.type === "income" ? "tag-income" : "tag-expense"}>
                {tx.type}
              </td>
              <td>{tx.category}</td>
              <td>
                {tx.type === "expense" ? "-" : "+"}
                {tx.amount}
              </td>
              <td>{tx.description || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionsList;
