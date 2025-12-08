// client/src/pages/HomePage.jsx
// Simple landing page - similar to the earlier App content.

function HomePage() {
  return (
    <div className="app-content">
      <header className="app-header">
        <h1>Finance Tracker</h1>
        <p>
          Track your income, expenses, budgets, and insights in one clean dashboard.
        </p>
      </header>

      <main className="app-main">
        <section className="card">
          <h2>Getting Started</h2>
          <p>Soon this app will let you:</p>
          <ul>
            <li>Add income and expenses</li>
            <li>See monthly summaries</li>
            <li>Visualize data with charts</li>
            <li>Set and track budgets</li>
          </ul>
          <p className="note">
            Use the navigation above to go to the Transactions page and try it out.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
