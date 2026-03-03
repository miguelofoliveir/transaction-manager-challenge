const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let transactions = [];

app.post("/transactions", (req, res) => {
  const { description, amount } = req.body;

  if (!description || typeof amount !== "number") {
    return res.status(400).json({ message: "Invalid payload" });
  }

  const newTransition = {
    id: transactions.length + 1,
    amount,
    description,
    createAt: new Date()
  };

  transactions.push(newTransition);
  res.status(201).json(newTransition);
});

app.get("/transactions", (req, res) => {
    res.json(transactions);
  });

app.listen(3001, () => {
  console.log("API running on http://localhost:3001");
});

module.exports = { app, transactions };