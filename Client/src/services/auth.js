import axios from "axios";

// Point this to your live Vercel URL
const BASE_URL = "https://zhenix-3ve57tfa5-salmankhalids-projects.vercel.app";

const API = axios.create({
  baseURL: BASE_URL,
});

// Auth endpoints
export const registerUser = (data) => API.post("/api/auth/register", data);
export const loginUser = (data) => API.post("/api/auth/login", data);

// AI endpoint
export const getAiResponse = (promptData) => API.post("/ai/get-response", promptData);