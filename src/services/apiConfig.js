// API configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://192.168.86.23:5149/api';

export const API_ENDPOINTS = {
    plants: `${API_URL}/plants`,
    batches: `${API_URL}/batches`,
    varieties: `${API_URL}/varieties`,
    waterings: `${API_URL}/waterings`,
};

export default API_URL;