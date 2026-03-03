import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001";

export default function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadTransactions = async () => {
    try {
      setError("");
      const res = await fetch(`${API_URL}/transactions`);
      const data = await res.json();
      setTransactions(Array.isArray(data) ? data : []);
    } catch (e) {
      setError("Could not load transactions.");
    }
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      description: description.trim(),
      amount: Number(amount),
    };

    if (!payload.description || Number.isNaN(payload.amount)) {
      setError("Please fill description and amount.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await fetch(`${API_URL}/transactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setDescription("");
      setAmount("");
      await loadTransactions();
    } catch (e) {
      setError("Could not save transaction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>Transaction Manager</h1>
        <p style={styles.subtitle}>Simple form + list (React + API)</p>

        <form onSubmit={onSubmit} style={styles.form}>
          <input
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.input}
          />

          <input
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            step="0.01"
            style={styles.input}
          />

          <button disabled={loading} style={styles.button}>
            {loading ? "Saving..." : "Add"}
          </button>
        </form>

        {error ? <div style={styles.error}>{error}</div> : null}

        <div style={styles.list}>
          {transactions.length === 0 ? (
            <div style={styles.empty}>No transactions yet.</div>
          ) : (
            transactions.map((t) => (
              <div key={t.id} style={styles.row}>
                <span style={styles.desc}>{t.description}</span>
                <span style={styles.amount}>{t.amount}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  container: {
    width: "100%",
    maxWidth: 720,
    padding: 16,
    border: "1px solid #ddd",
    borderRadius: 8,
  },
  title: { margin: 0, fontSize: 24 },
  subtitle: { marginTop: 6, marginBottom: 16, color: "#555" },

  form: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    alignItems: "center",
  },
  input: {
    flex: "1 1 260px",
    padding: 10,
    borderRadius: 6,
    border: "1px solid #ccc",
  },
  button: {
    flex: "0 0 auto",
    padding: "10px 16px",
    borderRadius: 6,
    border: "1px solid #333",
    background: "transparent",
    cursor: "pointer",
  },

  error: { marginTop: 12, color: "#b00020" },

  list: { marginTop: 16, display: "grid", gap: 8 },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 8,
    padding: 10,
    border: "1px solid #eee",
    borderRadius: 6,
  },
  desc: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  amount: { fontWeight: 600 },
  empty: { color: "#666", padding: 8 },
};
