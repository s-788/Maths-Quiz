import React, { useState } from "react";
import AnimatedCounter from "./components/AnimatedCounter";
import { motion } from "framer-motion";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const Quiz = () => {
  const [num1, setNum1] = useState(getRandomInt(1, 5));
  const [num2, setNum2] = useState(getRandomInt(1, 5));
  const [op, setOp] = useState(["+", "-", "×", "÷"][getRandomInt(0, 3)]);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const correctAnswer =
    op === "+"
      ? num1 + num2
      : op === "-"
      ? num1 - num2
      : op === "×"
      ? num1 * num2
      : Math.floor(num1 / num2);

  const checkAnswer = () => {
    if (parseInt(answer) === correctAnswer) {
      setFeedback("✅ Correct! Great job!");
    } else {
      setFeedback(`❌ Oops! The correct answer is ${correctAnswer}`);
    }
  };

  const nextQuestion = () => {
    setNum1(getRandomInt(1, 5));
    setNum2(getRandomInt(1, 5));
    setOp(["+", "-", "×", "÷"][getRandomInt(0, 3)]);
    setAnswer("");
    setFeedback("");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>🎉 Fun Math Quiz 🎉</h2>

      {/* Visualization based on operation */}
      {op === "+" && (
        <div>
          <AnimatedCounter count={num1} type="apple" /> ➕
          <AnimatedCounter count={num2} type="apple" />
        </div>
      )}

      {op === "-" && (
        <div>
          <AnimatedCounter count={num1} type="balloon" />
          <p>Take away {num2} 🎈</p>
        </div>
      )}

      {op === "×" && (
        <div>
          {[...Array(num1)].map((_, i) => (
            <motion.div
              key={i}
              style={{ margin: "0.5rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              <AnimatedCounter count={num2} type="star" />
            </motion.div>
          ))}
        </div>
      )}

      {op === "÷" && (
        <div>
          <p>Share {num1} 🍬 among {num2} kids</p>
          <AnimatedCounter count={num1} type="candy" />
          <br />
          <AnimatedCounter count={num2} type="child" />
        </div>
      )}

      <h3>
        {num1} {op} {num2} = ?
      </h3>

      <input
        type="number"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        style={{ padding: "0.5rem", margin: "0.5rem" }}
      />
      <button onClick={checkAnswer} style={{ padding: "0.5rem 1rem" }}>
        Check
      </button>
      <button onClick={nextQuestion} style={{ padding: "0.5rem 1rem", marginLeft: "1rem" }}>
        Next
      </button>

      <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{feedback}</p>
    </div>
  );
};

export default Quiz;
