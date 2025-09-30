import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [rewards, setRewards] = useState([]);

  // Fetch rewards from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/rewards")
      .then((res) => res.json())
      .then((data) => setRewards(data))
      .catch((err) => console.error(err));
  }, []);

  // Totals
  const totalRewards = rewards.length;
  const totalStars = rewards.filter((r) => r.type === "star").length;
  const totalCandies = rewards.filter((r) => r.type === "candy").length;

  // Accuracy (basic calculation – you can improve this if backend supports it)
  const accuracyRate = totalRewards > 0 ? 100 : 0;
  const correctAnswers = totalRewards;

  // Count stars grouped by operation
  const operationCounts = rewards
    .filter((r) => r.type === "star")
    .reduce(
      (acc, r) => {
        const op = r.operation?.toLowerCase();
        if (op && acc[op] !== undefined) {
          acc[op] += r.value || 1; // add stars based on reward value
        }
        return acc;
      },
      { addition: 0, subtraction: 0, multiplication: 0, division: 0 }
    );

  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: "2rem",
          minHeight: "100vh",
          background: "linear-gradient(to bottom right, #f5e8ff, #d6f0ff)",
          fontFamily: "Comic Sans MS, sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2rem", color: "#8a2be2" }}>
            Your Math Journey 🚀
          </h1>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            Look at all your amazing progress!
          </p>
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <div style={statCard}>
            <span style={{ fontSize: "2rem" }}>⭐</span>
            <h2>{totalStars}</h2>
            <p>Total Stars Earned</p>
          </div>
          <div style={statCard}>
            <span style={{ fontSize: "2rem" }}>🎯</span>
            <h2>{accuracyRate}%</h2>
            <p>Accuracy Rate</p>
          </div>
          <div style={statCard}>
            <span style={{ fontSize: "2rem" }}>📈</span>
            <h2>{correctAnswers}</h2>
            <p>Correct Answers</p>
          </div>
        </div>

        {/* Operation Performance */}
        <div style={sectionCard}>
          <h2 style={{ textAlign: "left", color: "#8a2be2" }}>
            Operation Performance 📊
          </h2>
          <PerformanceBar label="Addition" value={operationCounts.addition} />
          <PerformanceBar
            label="Subtraction"
            value={operationCounts.subtraction}
          />
          <PerformanceBar
            label="Multiplication"
            value={operationCounts.multiplication}
          />
          <PerformanceBar label="Division" value={operationCounts.division} />
        </div>

        {/* Achievements */}
        <div style={{ ...sectionCard, marginTop: "2rem" }}>
          <h2 style={{ textAlign: "center", color: "#8a2be2" }}>
            Achievements 🏆
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            <AchievementCard
              active={totalStars >= 1}
              title="First Star ✨"
              desc="Answer your first question correctly"
            />
            <AchievementCard
              active={totalStars >= 10}
              title="Star Collector"
              desc="Collect 10 stars"
            />
            <AchievementCard
              active={totalStars >= 25}
              title="Math Wizard"
              desc="Collect 25 stars"
            />
            <AchievementCard
              active={totalStars >= 50}
              title="Calculation Master"
              desc="Collect 50 stars"
            />
          </div>
        </div>

        {/* Footer Message */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <h3 style={{ color: "#8a2be2" }}>Great start! Keep going! 🎉</h3>
          <p style={{ color: "#555" }}>
            You're doing amazing! Try different operations to earn more stars.
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable Styles
const statCard = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  minWidth: "150px",
};

const sectionCard = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "15px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

// Performance Bar Component
const PerformanceBar = ({ label, value }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "0.3rem",
          fontWeight: "500",
        }}
      >
        <span>{label}</span>
        <span style={{ color: "#ffb400" }}>⭐ {value}</span>
      </div>
      <div
        style={{
          background: "#e0dff5",
          borderRadius: "10px",
          overflow: "hidden",
          height: "12px",
        }}
      >
        <div
          style={{
            width: `${Math.min(value, 10) * 10}%`, // max at 10 stars
            background: "#8a2be2",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
};

// Achievement Card Component
const AchievementCard = ({ active, title, desc }) => {
  return (
    <div
      style={{
        background: active ? "#fff7e6" : "#f0f0f0",
        border: active ? "2px solid #ffb400" : "2px solid transparent",
        borderRadius: "10px",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h4 style={{ marginBottom: "0.5rem" }}>{title}</h4>
      <p style={{ fontSize: "0.9rem", color: "#555" }}>{desc}</p>
    </div>
  );
};

export default Dashboard;
