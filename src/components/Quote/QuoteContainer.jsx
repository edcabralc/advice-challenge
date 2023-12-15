import React from "react";
import styles from "./Quote.module.css";
const QuoteContainer = ({ children, style }) => {
  return <div className={style}>{children}</div>;
};

export default QuoteContainer;
