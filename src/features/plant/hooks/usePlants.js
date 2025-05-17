// src/features/plant/hooks/usePlants.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getPlants,
    getPlantById,
    createPlant,
    updatePlant,
    deletePlant
} from '../services/plantService';

export const usePlants = () => {
    const queryClient = useQueryClient();

    // Get all plants
    const plantsQuery = useQuery({
        queryKey: ['plants'],
        queryFn: getPlants,
    });

    // Get plant by id
    const getPlant = (id) => {
        return useQuery({
            queryKey: ['plants', id],
            queryFn: () => getPlantById(id),
            enabled: !!id,
        });
    };

    // Create plant mutation
    const createPlantMutation = useMutation({
        mutationFn: createPlant,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['plants'] });
        },
    });

    // Update plant mutation
    const updatePlantMutation = useMutation({
        mutationFn: ({ id, data }) => updatePlant(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['plants'] });
        },
    });

    // Delete plant mutation
    const deletePlantMutation = useMutation({
        mutationFn: deletePlant,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['plants'] });
        },
    });

    return {
        plants: plantsQuery.data?.data || [],
        isLoading: plantsQuery.isLoading,
        isError: plantsQuery.isError,
        error: plantsQuery.error,
        getPlant,
        createPlant: createPlantMutation.mutateAsync,
        isCreating: createPlantMutation.isLoading,
        updatePlant: updatePlantMutation.mutateAsync,
        isUpdating: updatePlantMutation.isLoading,
        deletePlant: deletePlantMutation.mutateAsync,
        isDeleting: deletePlantMutation.isLoading,
    };
};

export default usePlants;