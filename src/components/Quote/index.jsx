import { useState, useEffect } from "react";
import Link from "next/link";
import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading";
import styles from "../Quote/Quote.module.css";

export const Quote = () => {
  const { getQuote } = useFetch();
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const { slip } = await getQuote();

      if (slip == null) {
        throw new Error("Não foi possível obter os dados");
      }

      setQuote({ ...slip });
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
        <button onClick={getData}>
          <img src="../assets/icon-dice.svg" />
        </button>
      </div>
      <span className={styles.dev}>
        made by
        <Link href="https://github.com/edcabralc">@edcabralc</Link>
      </span>
    </main>
  );
};
