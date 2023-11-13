import axios from "axios";

const API_SERVER_ADDRESS = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

const API = axios.create({
  baseURL: API_SERVER_ADDRESS,
});

export default API;
