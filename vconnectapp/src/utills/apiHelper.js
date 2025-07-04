// src/utils/apiHelper.js
import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "https://vconnect-alert.winzetech.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Get token from localStorage (for web)
const getToken = () => {
  const loginData = localStorage.getItem("loginData");
  try {
    return loginData ? JSON.parse(loginData).accessToken : null;
  } catch (e) {
    return null;
  }
};

// Attach token to request
API.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
API.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const status = error?.response?.status;

    if (status === 401 || status === 403) {
      console.warn("Session expired. Logging out...");
      localStorage.removeItem("loginData");
      window.location.href = "/login"; // redirect to login on web
    }

    if (status === 404) {
      console.warn("Resource not found:", error?.response?.config?.url);
      return Promise.resolve(null);
    }

    return Promise.reject(error?.response?.data || { message: "Something went wrong!" });
  }
);

// API helper methods
const apiHelper = {
  get: async (url, params = {}) => {
    try {
      const response = await API.get(url, { params });
      return response;
    } catch (error) {
      throw error;
    }
  },

  post: async (url, data = {}, customHeaders = {}) => {
    try {
      const response = await API.post(url, data, { headers: customHeaders });
      return response;
    } catch (error) {
      throw error;
    }
  },

  put: async (url, data = {}, customHeaders = {}) => {
    try {
      const response = await API.put(url, data, { headers: customHeaders });
      return response;
    } catch (error) {
      throw error;
    }
  },

  patch: async (url, data = {}, customHeaders = {}) => {
    try {
      const response = await API.patch(url, data, { headers: customHeaders });
      return response;
    } catch (error) {
      throw error;
    }
  },

  delete: async (url, customHeaders = {}) => {
    try {
      const response = await API.delete(url, { headers: customHeaders });
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default apiHelper;
