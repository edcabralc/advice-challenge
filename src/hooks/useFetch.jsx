import { useApi } from "./useApi";

export const useFetch = () => ({
  getData: async () => {
    const api = useApi();
    try {
      const { data, status } = await api.fetchData("/advice");

      if (status !== 200) {
        throw new Error("Não foi possível obter os dados");
      }

      return data;
    } catch ({ name, error, message }) {
      console.log(`${name}: ${error}. ${message}`);
      return error;
    }
  },
});
