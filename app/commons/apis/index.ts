import axios from "axios";
import { API_ENDPOINT } from "../constants";

export const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
