import React from "react";
import QuizTemplate from "../components/QuizTemplate";
import Navbar from "../components/Navbar";
const Division = ({ setRewards }) => (
  <>
    <Navbar />
    <QuizTemplate operation="÷" text="🍬 Division with Candies & Kids!" setRewards={setRewards} />
  </>
);

export default Division;
