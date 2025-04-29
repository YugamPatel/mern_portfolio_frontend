import axios from "axios";
const env = import.meta.env;

const client = axios.create({
  withCredentials: true, 
  baseURL: env.VITE_BACKEND_LINK || "http://localhost:1000",
  headers: {
    "Content-Type": "application/json", 
  },
});

export default client;
