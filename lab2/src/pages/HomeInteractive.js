import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRocket, FaLeaf } from "react-icons/fa";
import { GiLion, GiTargetArrows } from "react-icons/gi";
import { MdAdd, MdRemove, MdClear } from "react-icons/md";

const adventureCards = [
  {
    title: "Addition Adventure",
    desc: "Join the numbers and make them bigger! +",
    color: "#4fd18b",
    icon: <MdAdd size={32} />,
    badge: <FaLeaf size={32} color="#7ed957" />,
    route: "/addition",
    btn: "Start Adventure",
  },
  {
    title: "Subtraction Safari",
    desc: "Take numbers away and see what's left! -",
    color: "#f7b32b",
    icon: <MdRemove size={32} />,
    badge: <GiLion size={32} color="#f7b32b" />,
    route: "/subtraction",
    btn: "Start Adventure",
  },
  {
    title: "Multiplication Mission",
    desc: "Make numbers grow super fast! ×",
    color: "#4f8fd1",
    icon: <MdClear size={32} />,
    badge: <FaRocket size={32} color="#ff5e5e" />,
    route: "/multiplication",
    btn: "Start Adventure",
  },
  {
    title: "Division Discovery",
    desc: "Share numbers equally with friends! ÷",
    color: "#f76c6c",
    icon: <span style={{ fontSize: 32 }}>÷</span>,
    badge: <GiTargetArrows size={32} color="#f76c6c" />,
    route: "/division",
    btn: "Start Adventure",
  },
];

const HomeInteractive = ({ rewards = [] }) => {
  const navigate = useNavigate();
  const stars = rewards.filter(r => r.icon === "⭐").length;

  return (
    <div style={{ background: "#f5f3ff", minHeight: "100vh", padding: "2vw" }}>
      {/* Welcome Banner */}
      <div
        style={{
          background: "white",
          borderRadius: "2rem",
          boxShadow: "0 4px 24px #d1c4e9",
          padding: "2rem",
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        <FaRocket size={48} style={{ background: "linear-gradient(45deg,#ff8c00,#ff5e5e)", borderRadius: "50%", padding: "0.5rem" }} />
        <h1 style={{ color: "#7c4dff", margin: "1rem 0 0.5rem" }}>
          Welcome to Math Galaxy! <FaStar color="#ffd700" />
        </h1>
        <p style={{ color: "#888", fontSize: "1.2rem" }}>
          Blast off on an amazing math adventure and collect stars along the way!
        </p>
        
      </div>

      {/* Navigation Bar */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginBottom: "2rem",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            background: "#fff",
            color: "#7c4dff",
            border: "none",
            borderRadius: "1rem",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 2px 8px #e1bee7",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </button>
        <button
          style={{
            background: "#4fd18b",
            color: "#fff",
            border: "none",
            borderRadius: "1rem",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 2px 8px #c8e6c9",
            cursor: "pointer",
          }}
          onClick={() => navigate("/addition")}
        >
          <MdAdd /> Addition
        </button>
        <button
          style={{
            background: "#f7b32b",
            color: "#fff",
            border: "none",
            borderRadius: "1rem",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 2px 8px #ffe0b2",
            cursor: "pointer",
          }}
          onClick={() => navigate("/subtraction")}
        >
          <MdRemove /> Subtraction
        </button>
        <button
          style={{
            background: "#4f8fd1",
            color: "#fff",
            border: "none",
            borderRadius: "1rem",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 2px 8px #bbdefb",
            cursor: "pointer",
          }}
          onClick={() => navigate("/multiplication")}
        >
          <MdClear /> Multiplication
        </button>
        <button
          style={{
            background: "#f76c6c",
            color: "#fff",
            border: "none",
            borderRadius: "1rem",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 2px 8px #ffcdd2",
            cursor: "pointer",
          }}
          onClick={() => navigate("/division")}
        >
          <span style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}>÷</span> Division
        </button>
        <button
          style={{
            background: "#ffd700",
            color: "#7c4dff",
            border: "none",
            borderRadius: "1rem",
            padding: "0.8rem 2rem",
            fontWeight: "bold",
            fontSize: "1rem",
            boxShadow: "0 2px 8px #ffe082",
            cursor: "pointer",
          }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      </div>
      
<div
  style={{
    background: "#fff",
    borderRadius: "2rem",
    boxShadow: "0 4px 24px #e1bee7",
    padding: "2rem",
    marginBottom: "2rem",
    textAlign: "center",
  }}
>
  <h2 style={{ color: "#7c4dff", fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
    Ready for Fun Learning? <span role="img" aria-label="graduation">🎓</span>
  </h2>
  <p style={{ color: "#8a7bb7", fontSize: "1.25rem", marginBottom: "2rem" }}>
    Each correct answer earns you a shiny star! Collect stars, unlock achievements, and become a Math Galaxy champion!
  </p>
  <div style={{
    display: "flex",
    justifyContent: "center",
    gap: "4rem",
    flexWrap: "wrap"
  }}>
    <div>
      <div style={{ fontSize: "2.5rem" }}>🎯</div>
      <div style={{ color: "#7c4dff", fontWeight: 700, marginTop: "0.5rem" }}>Solve Problems</div>
      <div style={{ color: "#8a7bb7" }}>Answer fun math questions</div>
    </div>
    <div>
      <div style={{ fontSize: "2.5rem" }}>⭐</div>
      <div style={{ color: "#7c4dff", fontWeight: 700, marginTop: "0.5rem" }}>Earn Stars</div>
      <div style={{ color: "#8a7bb7" }}>Get stars for correct answers</div>
    </div>
    <div>
      <div style={{ fontSize: "2.5rem" }}>🏆</div>
      <div style={{ color: "#7c4dff", fontWeight: 700, marginTop: "0.5rem" }}>Unlock Rewards</div>
      <div style={{ color: "#8a7bb7" }}>Achieve new milestones</div>
    </div>
  </div>
</div>


      {/* Adventure Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "2rem",
        }}
      >
        {adventureCards.map((card, idx) => (
          <div
            key={card.title}
            style={{
              background: "#fff",
              borderRadius: "2rem",
              boxShadow: "0 4px 24px #e1bee7",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
            }}
          >
            <div style={{
              position: "absolute",
              top: "1.5rem",
              left: "1.5rem",
              background: card.color,
              borderRadius: "1rem",
              padding: "0.5rem",
              color: "#fff",
              fontSize: "2rem",
              boxShadow: "0 2px 8px #e1bee7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              {card.icon}
            </div>
            <div style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
            }}>
              {card.badge}
            </div>
            <h2 style={{ color: "#7c4dff", marginTop: "3.5rem", marginBottom: "0.5rem" }}>
              {card.title}
            </h2>
            <p style={{ color: "#888", marginBottom: "2rem" }}>{card.desc}</p>
            <button
              style={{
                background: "#7c4dff",
                color: "#fff",
                border: "none",
                borderRadius: "1rem",
                padding: "0.8rem 2rem",
                fontWeight: "bold",
                fontSize: "1rem",
                boxShadow: "0 2px 8px #d1c4e9",
                cursor: "pointer",
                marginTop: "auto",
              }}
              onClick={() => navigate(card.route)}
            >
              <FaRocket style={{ marginRight: "0.5rem" }} /> {card.btn}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeInteractive;