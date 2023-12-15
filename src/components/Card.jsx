import React from "react";
import QuoteAdvice from "./Quote/QuoteAdvice";
import styles from "../components/Quote/Quote.module.css";
import { Loading } from "../components/Loading";
import { Quote } from "../components/Quote";
import { useData } from "@/hooks/useData";

const Card = () => {
  const { error, quote, loading, getQuote } = useData();

  if (quote === null) {
    return null;
  }

  return (
    <>
      <Quote.Root>
        <Quote.Container style={styles.Advice}>
          <Quote.Content
            content={
              loading ? <Loading /> : <QuoteAdvice data={quote} error={error} />
            }
          />
          <Quote.Button action={getQuote} />
        </Quote.Container>
        <Quote.Footer />
      </Quote.Root>
    </>
  );
};

export default Card;
