import { http } from "@/services/api";

export const useApi = () => ({
  getData: async () => await http.get(),
});
