import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLI_BASE_URL_API,
});
