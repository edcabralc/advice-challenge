import React from "react";
import styles from "../Quote/Quote.module.css";
import Error from "../Error";

const QuoteAdvice = ({ data, error }) => {
  return (
    <>
      <h1 className={styles.AdviceQuoteTitle}>advice #{data.id}</h1>

      {error ? (
        <Error>{error}</Error>
      ) : (
        <p className={styles.AdviceQuote}>{data.advice}</p>
      )}
      <img
        className={styles.AdviceDivider}
        src="../assets/pattern-divider-desktop.svg"
        alt={data.advice}
      />
    </>
  );
};

export default QuoteAdvice;
