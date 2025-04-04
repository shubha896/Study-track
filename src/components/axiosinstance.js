// src/server/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Use your actual backend URL here
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers['Authorization'] = Bearer ${token};
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;