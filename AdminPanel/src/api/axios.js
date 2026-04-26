import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ IMAGE HELPER (FINAL)
export const ImageUrl = (img) => {
  if (!img) return "";

  if (img.startsWith("http")) return img;   // already full
  if (img.startsWith("blob:")) return img;  // local preview

  return `http://localhost:5000${img}`;     // backend image
};

export default API;