import React from "react";
import QuizTemplate from "../components/QuizTemplate";
import Navbar from "../components/Navbar";
const Multiplication = ({ setRewards }) => (
  <>
    <Navbar />
    <QuizTemplate operation="×" text="⭐ Multiplication with Fun Icons!" setRewards={setRewards} />
  </>
);

export default Multiplication;
