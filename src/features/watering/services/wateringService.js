import httpClient from '../../../services/httpClient';
import { API_ENDPOINTS } from '../../../services/apiConfig';

// Dummy data
const WATERINGS_DATA = [
    { id: 1, plantId: 1, date: '2023-05-12', amount: 250, notes: 'Soil was dry' },
    { id: 2, plantId: 2, date: '2023-05-15', amount: 100, notes: 'Light watering' },
    { id: 3, plantId: 1, date: '2023-05-19', amount: 200, notes: null },
    { id: 4, plantId: 3, date: '2023-05-20', amount: 300, notes: 'Added fertilizer' },
    { id: 5, plantId: 4, date: '2023-05-22', amount: 150, notes: null },
];

// Get all waterings
export const getWaterings = async () => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: WATERINGS_DATA });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(API_ENDPOINTS.waterings);
    } catch (error) {
        console.error('Error fetching waterings:', error);
        throw error;
    }
};

// Get watering by ID
export const getWateringById = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const watering = WATERINGS_DATA.find(w => w.id === parseInt(id));
                if (watering) {
                    resolve({ data: watering });
                } else {
                    reject(new Error('Watering record not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(`${API_ENDPOINTS.waterings}/${id}`);
    } catch (error) {
        console.error(`Error fetching watering with id ${id}:`, error);
        throw error;
    }
};

// Create watering
export const createWatering = async (wateringData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                const newWatering = {
                    id: WATERINGS_DATA.length + 1,
                    ...wateringData,
                };
                WATERINGS_DATA.push(newWatering);
                resolve({ data: newWatering });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.post(API_ENDPOINTS.waterings, wateringData);
    } catch (error) {
        console.error('Error creating watering record:', error);
        throw error;
    }
};

// Update watering
export const updateWatering = async (id, wateringData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = WATERINGS_DATA.findIndex(w => w.id === parseInt(id));
                if (index !== -1) {
                    WATERINGS_DATA[index] = { ...WATERINGS_DATA[index], ...wateringData };
                    resolve({ data: WATERINGS_DATA[index] });
                } else {
                    reject(new Error('Watering record not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.put(`${API_ENDPOINTS.waterings}/${id}`, wateringData);
    } catch (error) {
        console.error(`Error updating watering with id ${id}:`, error);
        throw error;
    }
};

// Delete watering
export const deleteWatering = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = WATERINGS_DATA.findIndex(w => w.id === parseInt(id));
                if (index !== -1) {
                    WATERINGS_DATA.splice(index, 1);
                    resolve({ status: 200 });
                } else {
                    reject(new Error('Watering record not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.delete(`${API_ENDPOINTS.waterings}/${id}`);
    } catch (error) {
        console.error(`Error deleting watering with id ${id}:`, error);
        throw error;
    }
};