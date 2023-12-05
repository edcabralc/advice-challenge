//api.adviceslip.com/advice

import axios from "axios";

export const http = axios.create({
  baseURL: "https://api.adviceslip.com/advice",
});
