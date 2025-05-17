import httpClient from '../../../services/httpClient';
import { API_ENDPOINTS } from '../../../services/apiConfig';

// Dummy data
const PLANTS_DATA = [
    { id: 1, name: 'Monstera Deliciosa', type: 'Foliage', status: 'Active', acquisitionDate: '2023-01-15', location: 'Living Room' },
    { id: 2, name: 'Snake Plant', type: 'Succulent', status: 'Active', acquisitionDate: '2023-02-20', location: 'Bedroom' },
    { id: 3, name: 'Fiddle Leaf Fig', type: 'Tree', status: 'Dormant', acquisitionDate: '2023-03-10', location: 'Office' },
    { id: 4, name: 'Pothos', type: 'Vine', status: 'Active', acquisitionDate: '2023-04-05', location: 'Kitchen' },
    { id: 5, name: 'ZZ Plant', type: 'Foliage', status: 'Active', acquisitionDate: '2023-05-22', location: 'Bathroom' },
];

// Get all plants
export const getPlants = async () => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: PLANTS_DATA });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(API_ENDPOINTS.plants);
    } catch (error) {
        console.error('Error fetching plants:', error);
        throw error;
    }
};

// Get plant by ID
export const getPlantById = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const plant = PLANTS_DATA.find(p => p.id === parseInt(id));
                if (plant) {
                    resolve({ data: plant });
                } else {
                    reject(new Error('Plant not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.get(`${API_ENDPOINTS.plants}/${id}`);
    } catch (error) {
        console.error(`Error fetching plant with id ${id}:`, error);
        throw error;
    }
};

// Create plant
export const createPlant = async (plantData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve) => {
            setTimeout(() => {
                const newPlant = {
                    id: PLANTS_DATA.length + 1,
                    ...plantData,
                };
                PLANTS_DATA.push(newPlant);
                resolve({ data: newPlant });
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.post(API_ENDPOINTS.plants, plantData);
    } catch (error) {
        console.error('Error creating plant:', error);
        throw error;
    }
};

// Update plant
export const updatePlant = async (id, plantData) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = PLANTS_DATA.findIndex(p => p.id === parseInt(id));
                if (index !== -1) {
                    PLANTS_DATA[index] = { ...PLANTS_DATA[index], ...plantData };
                    resolve({ data: PLANTS_DATA[index] });
                } else {
                    reject(new Error('Plant not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.put(`${API_ENDPOINTS.plants}/${id}`, plantData);
    } catch (error) {
        console.error(`Error updating plant with id ${id}:`, error);
        throw error;
    }
};

// Delete plant
export const deletePlant = async (id) => {
    try {
        // Simulating API call with delay
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const index = PLANTS_DATA.findIndex(p => p.id === parseInt(id));
                if (index !== -1) {
                    PLANTS_DATA.splice(index, 1);
                    resolve({ status: 200 });
                } else {
                    reject(new Error('Plant not found'));
                }
            }, 500);
        });

        // Real API call would be:
        // return await httpClient.delete(`${API_ENDPOINTS.plants}/${id}`);
    } catch (error) {
        console.error(`Error deleting plant with id ${id}:`, error);
        throw error;
    }
};