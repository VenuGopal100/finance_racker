// client/src/pages/HomePage.jsx
// Simple landing / intro page for the Finance Tracker

function HomePage() {
  return (
    <div className="page-container">
      <div className="card">
        <h2>Welcome to Finance Tracker 👋</h2>

        <p style={{ marginBottom: "1rem", color: "#374151" }}>
          Finance Tracker is a simple personal expense management application
          built using the MERN stack. It helps you track your income, expenses,
          and monthly spending in one place.
        </p>

        <ul style={{ marginLeft: "1.2rem", marginBottom: "1rem" }}>
          <li>Add and manage income & expenses</li>
          <li>View monthly financial summary</li>
          <li>Track spending categories</li>
          <li>Set and monitor budgets</li>
          <li>Fully deployed with real backend API</li>
        </ul>

        <p style={{ color: "#475569" }}>
          Use the <strong>Dashboard</strong> to view insights and the{" "}
          <strong>Transactions</strong> page to add and manage your records.
        </p>
      </div>

      <div className="card">
        <h2>Tech Stack</h2>
        <ul style={{ marginLeft: "1.2rem" }}>
          <li>Frontend: React (Vite) + Custom CSS</li>
          <li>Backend: Node.js + Express</li>
          <li>Database: MongoDB Atlas</li>
          <li>Deployment: Vercel (Frontend) & Render (Backend)</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
