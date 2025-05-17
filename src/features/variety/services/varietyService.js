import httpClient from '../../../services/httpClient';
import { API_ENDPOINTS } from '../../../services/apiConfig';

// Dummy data
const VARIETIES_DATA = [
    { id: 1, name: 'Monstera Deliciosa', species: 'Monstera deliciosa', family: 'Araceae', careLevel: 'Moderate', description: 'Popular houseplant with unique split leaves' },
    { id: 2, name: 'Snake Plant', species: 'Sansevieria trifasciata', family: 'Asparagaceae', careLevel: 'Easy', description: 'Hardy succulent with upright leaves' },
    { id: 3, name: 'Fiddle Leaf Fig', species: 'Ficus lyrata', family: 'Moraceae', careLevel: 'Expert', description: 'Trendy houseplant with large violin-shaped leaves' },
    { id: 4, name: 'Pothos', species: 'Epipremnum aureum', family: 'Araceae', careLevel: 'Easy', description: 'Vining plant with heart-shaped leaves' },
    { id: 5, name: 'ZZ Plant', species: 'Zamioculcas zamiifolia', family: 'Araceae', careLevel: 'Easy', description: 'Drought-tolerant plant with glossy leaves' },
];

// Get all varieties
export const getVarieties = async () => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: VARIETIES_DATA });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(API_ENDPOINTS.varieties);
    } catch (error) {
        console.error('Error fetching varieties:', error);
        throw error;
    }
};

// Get variety by ID
export const getVarietyById = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const variety = VARIETIES_DATA.find(v => v.id === parseInt(id));
                if (variety) {
                    resolve({ data: variety });
                } else {
                    reject(new Error('Variety not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(`${API_ENDPOINTS.varieties}/${id}`);
    } catch (error) {
        console.error(`Error fetching variety with id ${id}:`, error);
        throw error;
    }
};

// Create variety
export const createVariety = async (varietyData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                const newVariety = {
                    id: VARIETIES_DATA.length + 1,
                    ...varietyData,
                };
                VARIETIES_DATA.push(newVariety);
                resolve({ data: newVariety });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.post(API_ENDPOINTS.varieties, varietyData);
    } catch (error) {
        console.error('Error creating variety:', error);
        throw error;
    }
};

// Update variety
export const updateVariety = async (id, varietyData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = VARIETIES_DATA.findIndex(v => v.id === parseInt(id));
                if (index !== -1) {
                    VARIETIES_DATA[index] = { ...VARIETIES_DATA[index], ...varietyData };
                    resolve({ data: VARIETIES_DATA[index] });
                } else {
                    reject(new Error('Variety not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.put(`${API_ENDPOINTS.varieties}/${id}`, varietyData);
    } catch (error) {
        console.error(`Error updating variety with id ${id}:`, error);
        throw error;
    }
};

// Delete variety
export const deleteVariety = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = VARIETIES_DATA.findIndex(v => v.id === parseInt(id));
                if (index !== -1) {
                    VARIETIES_DATA.splice(index, 1);
                    resolve({ status: 200 });
                } else {
                    reject(new Error('Variety not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.delete(`${API_ENDPOINTS.varieties}/${id}`);
    } catch (error) {
        console.error(`Error deleting variety with id ${id}:`, error);
        throw error;
    }
};