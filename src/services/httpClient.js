import axios from 'axios';
import API_URL from './apiConfig';

// Create axios instance with default configuration
const httpClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor for auth tokens, etc.
httpClient.interceptors.request.use(
    (config) => {
        // You can add auth token here
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Add response interceptor for error handling
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors
        if (error.response) {
            // Handle specific status codes
            if (error.response.status === 401) {
                // Unauthorized - redirect to login or refresh token
                console.log('Unauthorized - please login');
            }
        }
        return Promise.reject(error);
    }
);

export default httpClient;