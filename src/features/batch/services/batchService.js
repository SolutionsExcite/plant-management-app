import httpClient from '../../../services/httpClient';
import { API_ENDPOINTS } from '../../../services/apiConfig';

// Dummy data
const BATCHES_DATA = [
    { id: 1, name: 'Spring 2023', startDate: '2023-03-01', endDate: '2023-06-01', status: 'Active', plantCount: 12 },
    { id: 2, name: 'Summer 2023', startDate: '2023-06-01', endDate: '2023-09-01', status: 'Completed', plantCount: 8 },
    { id: 3, name: 'Fall 2023', startDate: '2023-09-01', endDate: '2023-12-01', status: 'Completed', plantCount: 15 },
    { id: 4, name: 'Winter 2024', startDate: '2023-12-01', endDate: '2024-03-01', status: 'Active', plantCount: 10 },
    { id: 5, name: 'Spring 2024', startDate: '2024-03-01', endDate: '2024-06-01', status: 'Planned', plantCount: 0 },
];

// Get all batches
export const getBatches = async () => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: BATCHES_DATA });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(API_ENDPOINTS.batches);
    } catch (error) {
        console.error('Error fetching batches:', error);
        throw error;
    }
};

// Get batch by ID
export const getBatchById = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const batch = BATCHES_DATA.find(b => b.id === parseInt(id));
                if (batch) {
                    resolve({ data: batch });
                } else {
                    reject(new Error('Batch not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(`${API_ENDPOINTS.batches}/${id}`);
    } catch (error) {
        console.error(`Error fetching batch with id ${id}:`, error);
        throw error;
    }
};

// Create batch
export const createBatch = async (batchData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                const newBatch = {
                    id: BATCHES_DATA.length + 1,
                    ...batchData,
                };
                BATCHES_DATA.push(newBatch);
                resolve({ data: newBatch });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.post(API_ENDPOINTS.batches, batchData);
    } catch (error) {
        console.error('Error creating batch:', error);
        throw error;
    }
};

// Update batch
export const updateBatch = async (id, batchData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = BATCHES_DATA.findIndex(b => b.id === parseInt(id));
                if (index !== -1) {
                    BATCHES_DATA[index] = { ...BATCHES_DATA[index], ...batchData };
                    resolve({ data: BATCHES_DATA[index] });
                } else {
                    reject(new Error('Batch not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.put(`${API_ENDPOINTS.batches}/${id}`, batchData);
    } catch (error) {
        console.error(`Error updating batch with id ${id}:`, error);
        throw error;
    }
};

// Delete batch
export const deleteBatch = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = BATCHES_DATA.findIndex(b => b.id === parseInt(id));
                if (index !== -1) {
                    BATCHES_DATA.splice(index, 1);
                    resolve({ status: 200 });
                } else {
                    reject(new Error('Batch not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.delete(`${API_ENDPOINTS.batches}/${id}`);
    } catch (error) {
        console.error(`Error deleting batch with id ${id}:`, error);
        throw error;
    }
};