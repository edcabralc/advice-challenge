"use client";
import { useState, useEffect } from "react";
import { api } from "@/services/api";
import styles from "./page.module.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
    console.log(data);
  }, []);

  const getData = async () => {
    const { data } = await api.getQuote();
    setData(data.slip);
  };

  if (data === null) {
    return null;
  }

  return (
    <main className={styles.Main}>
      <div className={styles.Advice}>
        <div className={styles.AdviceContent}>
          <h1 className={styles.AdviceTitleQuote}>advice #{data.id}</h1>
          <p className={styles.AdviceQuote}>{data.advice}</p>

          <img
            className={styles.AdviceDivider}
            src="../assets/pattern-divider-desktop.svg"
            alt=""
          />
        </div>
        <button onClick={getData}>
          <img src="../assets/icon-dice.svg" alt="" srcSet="" />
        </button>
      </div>
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
