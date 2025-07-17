import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLICBASE_URL_API,
});
