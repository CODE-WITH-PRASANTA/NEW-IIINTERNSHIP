import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const API = axios.create({
  baseURL: BASE_URL,
});

// 🔥 helper for image URL
export const ImageUrl = (path) => {
  if (!path) return "";
  return `${BASE_URL}${path}`;
};

export default API;