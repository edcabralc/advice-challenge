import React from "react";
import { useData } from "@/hooks/useData";
// import styles from "../Quote/Quote.module.css";

const QuoteButton = ({ action }) => {
  return (
    <button onClick={action}>
      <img src="../assets/icon-dice.svg" />
    </button>
  );
};

export default QuoteButton;
