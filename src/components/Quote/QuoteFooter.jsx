import React from "react";
import Link from "next/link";
import styles from "./Quote.module.css";
const QuoteFooter = () => {
  return (
    <span className={styles.dev}>
      made by
      <Link href="https://github.com/edcabralc"> @edcabralc </Link>
    </span>
  );
};

export default QuoteFooter;
