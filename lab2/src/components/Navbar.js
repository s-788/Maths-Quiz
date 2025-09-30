import React from "react";
import { useNavigate } from "react-router-dom";
import { MdAdd, MdRemove, MdClear } from "react-icons/md";

const NavBar = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default NavBar;