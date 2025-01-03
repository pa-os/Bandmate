import axios from "axios";

export function createApiClient() {
  return axios.create({ baseURL: import.meta.env.VITE_BACKEND_API_URL });
}
