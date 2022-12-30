import axios from "axios";

const api = axios.create({
  baseURL: " http://10.48.9.45:3001",
});

export default api;