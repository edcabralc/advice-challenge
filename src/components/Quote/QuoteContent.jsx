import React from "react";
import styles from "../Quote/Quote.module.css";

const QuoteContent = ({ content }) => {
  return (
    <>
      <div className={styles.AdviceContent}>{content}</div>
    </>
  );
};

export default QuoteContent;
