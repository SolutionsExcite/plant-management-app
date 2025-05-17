import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getWaterings, getWateringById, createWatering, updateWatering, deleteWatering } from '../services/wateringService';

export const useWaterings = () => {
    const queryClient = useQueryClient();

    // Fetch all waterings
    const getAll = () =>
        useQuery({
            queryKey: ['waterings'],
            queryFn: getWaterings,
        });

    // Fetch single watering
    const getById = (id) =>
        useQuery({
            queryKey: ['waterings', id],
            queryFn: () => getWateringById(id),
            enabled: !!id,
        });

    // Create watering mutation
    const create = useMutation({
        mutationFn: createWatering,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['waterings'] });
        },
    });

    // Update watering mutation
    const update = useMutation({
        mutationFn: ({ id, data }) => updateWatering(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['waterings'] });
            queryClient.invalidateQueries({ queryKey: ['waterings', variables.id] });
        },
    });

    // Delete watering mutation
    const remove = useMutation({
        mutationFn: deleteWatering,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['waterings'] });
        },
    });

    return {
        getAll,
        getById,
        create,
        update,
        remove,
    };
};