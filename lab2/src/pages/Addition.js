import React from "react";
import QuizTemplate from "../components/QuizTemplate";
import Navbar from "../components/Navbar";

const Addition = ({ setRewards }) => (
  <>
    <Navbar />
    <QuizTemplate operation="+" text="🍎 Addition with Fun Icons!" setRewards={setRewards} />
  </>
);

export default Addition;

