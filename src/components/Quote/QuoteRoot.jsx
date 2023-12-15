import React from "react";
import styles from "../Quote/Quote.module.css";

const QuoteRoot = ({ children }) => {
  return <main className={styles.Main}>{children}</main>;
};

export default QuoteRoot;
