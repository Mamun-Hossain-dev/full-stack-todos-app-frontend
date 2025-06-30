import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

let onRefreshStart = null;

export function setOnRefreshStart(fn) {
  onRefreshStart = fn;
}

// auto-refresh token if 401
instance.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;

    // Only retry if it's a GET request (like /auth/me)
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true;
      try {
        if (onRefreshStart) {
          await onRefreshStart();
        } else {
          await instance.post("/auth/refresh");
        }
        return instance(original); // retry original request
      } catch (refreshError) {
        // Optional: clear cookies or trigger logout
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(err);
  }
);

export default instance;
