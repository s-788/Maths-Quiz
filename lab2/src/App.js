import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeInteractive from "./pages/HomeInteractive";
import Addition from "./pages/Addition";
import Subtraction from "./pages/Subtraction";
import Multiplication from "./pages/Multiplication";
import Division from "./pages/Division";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  // State to store collected rewards
  const [rewards, setRewards] = useState([]);

  return (
    <Router>
      

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={<HomeInteractive rewards={rewards} setRewards={setRewards} />}
        />
        <Route path="/addition" element={<Addition />} />
        <Route path="/subtraction" element={<Subtraction />} />
        <Route path="/multiplication" element={<Multiplication />} />
        <Route path="/division" element={<Division />} />
         
        <Route path="/dashboard" element={<Dashboard rewards={rewards} />} />
      </Routes>
    </Router>
  );
}

export default App;
