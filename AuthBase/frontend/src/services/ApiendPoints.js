import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
});

// ✅ API methods
export const get = (url) => instance.get(url);

export const post = (url, data) => instance.post(url, data);

export const put = (url, data) => instance.put(url, data);

export const remove = (url) => instance.delete(url); // renamed

// ✅ Request interceptor
instance.interceptors.request.use(
  (config) => {
    // Example: attach token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: handle 401
    if (error.response?.status === 401) {
      console.log("Unauthorized");
    }
    return Promise.reject(error);
  }
);