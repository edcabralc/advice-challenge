import { fetchData } from "../utils/fetchData";

const getData = async () => {
  try {
    const { data, status } = await fetchData("/advice");

    if (status !== 200) {
      throw new Error("Não foi possível obter os dados");
    }

    return data;
  } catch ({ name, error, message }) {
    console.log(`${name}: ${error}. ${message}`);
    return error;
  }
};

export { getData };
