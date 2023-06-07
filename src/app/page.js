"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { api } from "@/services/api";
import styles from "./page.module.css";
import { Loading } from "@/components/Loading";

const App = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    setLoading(true);
    try {
      const response = await api.getData();

      if (response.status !== 200) {
        throw new Error("Não foi possível obter os dados");
      }

      const { data } = response;
      setQuote(data.slip);
    } catch ({ name, error, message }) {
      console.log(`${name}: ${error}. ${message}`);
    }
    setLoading(false);
  };

  if (quote === null) {
    return null;
  }

  return (
    <main className={styles.Main}>
      <div className={styles.Advice}>
        <div className={styles.AdviceContent}>
          {loading && <Loading />}
          {!loading && quote && (
            <>
              <h1 className={styles.AdviceQuoteTitle}>advice #{quote.id}</h1>
              <p className={styles.AdviceQuote}>{quote.advice}</p>
              <img
                className={styles.AdviceDivider}
                src="../assets/pattern-divider-desktop.svg"
                alt={quote.advice}
              />
            </>
          )}
        </div>
        <button onClick={getQuote}>
          <img src="../assets/icon-dice.svg" />
        </button>
      </div>
      <span className={styles.dev}>
        made by
        <Link href="https://github.com/edcabralc"> @edcabralc</Link>
      </span>
    </main>
  );
};

export default App;

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->

//   <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">

//   <title>Frontend Mentor | Advice generator app</title>

//   <!-- Feel free to remove these styles or customise in your own stylesheet 👍 -->
//   <style>
//     .attribution { font-size: 11px; text-align: center; }
//     .attribution a { color: hsl(228, 45%, 44%); }
//   </style>
// </head>
// <body>

//   Advice #<!-- Advice ID goes here -->

//   "<!-- Advice text goes here -->"

//   <div class="attribution">
//     Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
//     Coded by <a href="#">Your Name Here</a>.
//   </div>
// </body>
// </html>
