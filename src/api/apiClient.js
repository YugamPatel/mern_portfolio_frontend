import axios from "axios";
const env = import.meta.env;

const client = axios.create({
  withCredentials: true, // Allows sending cookies with requests (if required)
  baseURL: env.VITE_BACKEND_LINK, // Reads backend URL from environment variables
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

export default client;
