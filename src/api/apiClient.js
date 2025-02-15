import axios from "axios";
const env = await import.meta.env;

// console.log("VITE_BACKEND_LINK:", import.meta.env.VITE_BACKEND_LINK);

const client = axios.create({
  withCredentials: true, // Allows sending cookies with requests (if required)
  baseURL: env.VITE_BACKEND_LINK, // Reads backend URL from environment variables
  withCredentials: true, // Allows sending cookies with requests (if required)
  headers: {
    "Content-Type": "application/json", // Default content type
  },
});

export default client;
