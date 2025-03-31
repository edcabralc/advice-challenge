import { http } from "@/services/api";

const fetchData = async (endpoint, config = {}) =>
  await http.get(endpoint, config);

export { fetchData };
