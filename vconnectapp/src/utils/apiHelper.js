import axios from "axios";
// import { Toast } from "toastify-react-native";
import { getItem } from "./localStorageHelper";

console.log(process.env.EXPO_PUBLIC_API_ENDPOINT, "api endpoint");
// Base API configuration
const API = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_ENDPOINT, // Change to your API URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token to headers
API.interceptors.request.use(
  async (config) => {
    console.log(1);
    const token = JSON.parse(await getItem("loginData"))?.accessToken; // Fetch token from storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for centralized error handling
API.interceptors.response.use(
  (response) => response.data, // Directly return data
  (error) => {
    // Toast.error(error?.response?.data);
    return Promise.reject(error?.response?.data || { message: "Something went wrong!" });
  }
);

// Helper functions
// Reusable functions for API calls
const ApiHelper = {
  get: async (url, params = {}) => {
    try {
      console.log(url, "api url");
      const response = await API.get(url, { params });     
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
 
 post: async (url, data = {}) => {
    try {
      const response = await API.post(url, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    } 
  },

  put: async (url, data = {}) => {
    try {
      const response = await API.put(url, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  delete: async (url) => {
    try {
      const response = await API.delete(url);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};

export default ApiHelper;
