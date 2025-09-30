const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory rewards array
let rewards = [];

// Root route for friendly message
app.get("/", (req, res) => {
  res.send("Math Galaxy Backend is running!");
});

// Get all rewards
app.get("/api/rewards", (req, res) => {
  res.json(rewards);
});

// Add a new reward manually (for flexibility / testing)
app.post("/api/rewards", (req, res) => {
  const reward = req.body;
  rewards.push(reward);
  res.status(201).json(reward);
});

// Clear all rewards (for testing / reset)
app.delete("/api/rewards", (req, res) => {
  rewards = [];
  res.json({ message: "All rewards cleared." });
});

// ✅ Perform math operation and assign rewards
app.post("/api/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;
  let reward;

  switch (operation) {
    case "add":
      result = num1 + num2;
      reward = { type: "star", value: 1, operation: "addition" };
      break;
    case "sub":
      result = num1 - num2;
      reward = { type: "star", value: 1, operation: "subtraction" };
      break;
    case "mul":
      result = num1 * num2;
      reward = { type: "star", value: 2, operation: "multiplication" };
      break;
    case "div":
      if (num2 === 0) {
        return res.status(400).json({ error: "Division by zero not allowed" });
      }
      result = num1 / num2;
      reward = { type: "star", value: 3, operation: "division" };
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  // Save reward
  rewards.push(reward);

  res.json({
    result,
    reward,
    rewards, // return updated rewards list too
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
