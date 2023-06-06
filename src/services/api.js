// https://api.adviceslip.com/
//api.adviceslip.com/advice

import axios from "axios";

const http = axios.create({
  baseURL: "https://api.adviceslip.com/advice",
});

export const api = {
  getData: () => http.get(),
};
