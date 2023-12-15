import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const useData = () => {
  const { getData } = useFetch();
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getQuote = async () => {
    setLoading(true);
    try {
      const { slip } = await getData();

      if (slip == null) {
        throw new Error("Não foi possível obter os dados");
      }

      setQuote({ ...slip });
    } catch ({ name, error, message, cause }) {
      console.log(`${name}: ${error}. ${message}`);
      setError(`Não foi possível obter os dados: ${name}`);
    } finally {
      setLoading(false);
    }
    return () => signal.abort();
  };

  useEffect(() => {
    getQuote();
  }, []);

  return { quote, error, loading, getQuote };
};
