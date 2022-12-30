import axios from "axios";

const api = axios.create({
  baseURL: " http://mongo:3001",
});

export default api;