import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

// Create axios instance
export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear invalid token
      localStorage.removeItem('adminToken');
      localStorage.removeItem('isAdminLoggedIn');
      localStorage.removeItem('adminSession');
      
      // Redirect to login if needed
      if (window.location.pathname.includes('admin')) {
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;