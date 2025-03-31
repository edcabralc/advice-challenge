import { useState, useEffect } from "react";
import { getData } from "../services/getData";

export const useData = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [abortController, setAbortController] = useState(null);

  const getQuote = async () => {
    setLoading(true);
    setError(null);

    if (abortController) {
      abortController.abort();
    }

    const controller = new AbortController();
    setAbortController(controller);

    try {
      const { slip } = await getData(controller.signal);

      if (slip == null) {
        throw new Error("Não foi possível obter os dados");
      }

      setQuote({ ...slip });
    } catch ({ name, error, message, cause }) {
      console.log(`${name}: ${error}. ${message}`);
      setError(`Não foi possível obter os dados: ${name}`);
    } finally {
      setLoading(false);
      setError(null);
    }
  };

  useEffect(() => {
    getQuote();

    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, []);

  return { quote, error, loading, getQuote };
};
