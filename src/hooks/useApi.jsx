import { http } from "@/services/api";

export const useApi = () => ({
  fetchData: async (endpoint) => await http.get(endpoint),
});
