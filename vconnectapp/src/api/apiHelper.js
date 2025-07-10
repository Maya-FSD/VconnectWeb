import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");
    console.log("Request Config:", config);
    console.log("Access Token:", token);
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error?.response?.data || { message: "Something went wrong!" })
);

export default API;
