//api.adviceslip.com/advice

import axios from "axios";

const controller = new AbortController();

export const http = axios.create({
  baseURL: "https://api.adviceslip.com",
});
