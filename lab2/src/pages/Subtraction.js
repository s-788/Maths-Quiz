import React from "react";
import QuizTemplate from "../components/QuizTemplate";
import Navbar from "../components/Navbar";
const Subtraction = ({setRewards}) => (
  <>
    <Navbar />
    <QuizTemplate operation="-" text="🎈 Subtraction with Fun Icons!" setRewards={setRewards} />
  </>
);

export default Subtraction;
