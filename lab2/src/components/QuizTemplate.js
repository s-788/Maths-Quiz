import React, { useState, useEffect } from "react";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getOperationSymbol = (op) => {
  switch (op) {
    case "+": return { symbol: "+", color: "#ff9800", emoji: "🧮" };
    case "-": return { symbol: "-", color: "#f7b32b", emoji: "🧮" };
    case "×": return { symbol: "×", color: "#4f8fd1", emoji: "🧮" };
    case "÷": return { symbol: "÷", color: "#f76c6c", emoji: "🧮" };
    default: return { symbol: "+", color: "#ff9800", emoji: "🧮" };
  }
};

const generateDivisionQuestion = () => {
  const divisor = getRandomInt(2, 10);
  const quotient = getRandomInt(2, 10);
  const dividend = divisor * quotient;
  return { dividend, divisor, quotient };
};

const generateOptions = (correct) => {
  const options = new Set([correct]);
  while (options.size < 4) {
    let delta = getRandomInt(-5, 5);
    let wrong = correct + delta;
    if (wrong !== correct && wrong > 0) options.add(wrong);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
};

const QuizTemplate = ({ operation, text, setRewards }) => {
  const [num1, setNum1] = useState(getRandomInt(10, 99));
  const [num2, setNum2] = useState(getRandomInt(10, 99));
  const [divisionQ, setDivisionQ] = useState(generateDivisionQuestion());
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let correct;
    if (operation === "÷") correct = divisionQ.quotient;
    else if (operation === "+") correct = num1 + num2;
    else if (operation === "-") correct = num1 - num2;
    else if (operation === "×") correct = num1 * num2;

    setOptions(generateOptions(correct));
    setSelected(null);
    setFeedback("");
  }, [num1, num2, divisionQ, operation]);

  const { symbol, color, emoji } = getOperationSymbol(operation);

  let displayNum1 = num1;
  let displayNum2 = num2;
  let correctAnswer;
  if (operation === "÷") {
    displayNum1 = divisionQ.dividend;
    displayNum2 = divisionQ.divisor;
    correctAnswer = divisionQ.quotient;
  } else if (operation === "+") {
    correctAnswer = num1 + num2;
  } else if (operation === "-") {
    correctAnswer = num1 - num2;
  } else if (operation === "×") {
    correctAnswer = num1 * num2;
  }

  // ✅ Call backend when answer is correct
  const handleReward = async () => {
    try {
      const opMap = { "+": "add", "-": "sub", "×": "mul", "÷": "div" };
      await fetch("http://localhost:5000/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          num1: displayNum1,
          num2: displayNum2,
          operation: opMap[operation],
        }),
      });

      // Fetch updated rewards
      const rewardsRes = await fetch("http://localhost:5000/api/rewards");
      const rewardsData = await rewardsRes.json();
      setRewards(rewardsData);
    } catch (err) {
      console.error("Error updating rewards:", err);
    }
  };

  const handleSelect = (opt) => {
    setSelected(opt);
    if (opt === correctAnswer) {
      setFeedback("✅ Correct! Great job!");
      handleReward(); // award star
    } else {
      setFeedback(`❌ Oops! The correct answer is ${correctAnswer}`);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setFeedback("");
    if (operation === "÷") {
      setDivisionQ(generateDivisionQuestion());
    } else {
      setNum1(getRandomInt(10, 99));
      setNum2(getRandomInt(10, 99));
    }
  };

  return (
    <div style={{
      background: "#fff",
      borderRadius: "2rem",
      boxShadow: "0 4px 24px #e1bee7",
      padding: "2rem",
      maxWidth: "500px",
      margin: "2rem auto",
      textAlign: "center"
    }}>
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>
        {text} <span style={{ fontSize: "2rem" }}>{emoji}</span>
      </h2>
      <div style={{ fontSize: "2.5rem", fontWeight: 700, color: "#7c4dff", marginBottom: "2rem" }}>
        {displayNum1} <span style={{ color }}>{symbol}</span> {displayNum2} = <span style={{ color: "#888" }}>?</span>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1.5rem",
        marginBottom: "1.5rem"
      }}>
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            disabled={selected !== null}
            style={{
              background: selected === opt
                ? (opt === correctAnswer ? "#4fd18b" : "#f76c6c")
                : "#7c4dff",
              color: "#fff",
              border: "none",
              borderRadius: "1rem",
              fontWeight: "bold",
              fontSize: "1.3rem",
              padding: "1rem 0",
              boxShadow: "0 2px 8px #d1c4e9",
              cursor: selected ? "not-allowed" : "pointer",
              transition: "background 0.2s"
            }}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && (
        <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          marginBottom: "1rem",
          color: feedback.startsWith("✅") ? "#4fd18b" : "#f76c6c"
        }}>
          {feedback}
        </div>
      )}
      <button
        onClick={nextQuestion}
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
          marginTop: "0.5rem"
        }}
      >
        Next
      </button>
    </div>
  );
};

export default QuizTemplate;
