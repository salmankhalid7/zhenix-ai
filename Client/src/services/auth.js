import axios from "axios";

// const API = "http://localhost:8000/api/auth";
const API = "";

export const registerUser = (data) =>
  axios.post(`${API}/register`, data);

export const loginUser = (data) =>
  axios.post(`${API}/login`, data);

