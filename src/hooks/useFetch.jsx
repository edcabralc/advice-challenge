import { useApi } from "./useApi";

export const useFetch = () => ({
  getQuote: async () => {
    const api = useApi();
    try {
      const response = await api.getData();

      if (response.status !== 200) {
        throw new Error("Não foi possível obter os dados");
      }

      const { data } = response;

      return data;
    } catch ({ name, error, message }) {
      console.log(`${name}: ${error}. ${message}`);
      return error;
    }
  },
});
