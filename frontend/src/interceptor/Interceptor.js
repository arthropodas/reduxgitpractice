// axiosInstance.js

import axios from "axios";

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  headers: {
    'Content-Type': 'application/json',
  },
});

const setAuthorizationHeader = (config) => {
  const authTokens = JSON.parse(localStorage.getItem('authTokens') || '{}');
  const accessToken = authTokens?.access;

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

axiosInstance.interceptors.request.use(setAuthorizationHeader, (error) => {
  console.error('Request Error:', error);
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      try {
        await refreshAccessToken();
        return axiosInstance(error.config);
      } catch (refreshError) {
        console.error('Refresh token failed:', refreshError);
        return Promise.reject(refreshError);
      }
    } else {
      console.error('Response Error:', error);
      return Promise.reject(error);
    }
  }
);

const refreshAccessToken = async () => {
  const authTokens = JSON.parse(localStorage.getItem('authTokens') || '{}');
  const refreshToken = authTokens.refreshToken;

  try {
    const response = await axiosInstance.post('/api/token/refresh/', { refreshToken });
    const newAccessToken = response?.data?.data?.accessToken;
    const updatedAuthTokens = JSON.stringify({
      accessToken: newAccessToken,
      refreshToken: refreshToken,
    });
    localStorage.setItem('authTokens', updatedAuthTokens);
    return newAccessToken;
  } catch (err) {
    console.error('Error refreshing access token:', err);
    return Promise.reject(err);
  }
};

export default axiosInstance;
