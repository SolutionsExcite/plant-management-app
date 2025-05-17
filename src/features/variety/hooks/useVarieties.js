import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getVarieties, getVarietyById, createVariety, updateVariety, deleteVariety } from '../services/varietyService';

export const useVarieties = () => {
    const queryClient = useQueryClient();

    // Fetch all varieties
    const getAll = () =>
        useQuery({
            queryKey: ['varieties'],
            queryFn: getVarieties,
        });

    // Fetch single variety
    const getById = (id) =>
        useQuery({
            queryKey: ['varieties', id],
            queryFn: () => getVarietyById(id),
            enabled: !!id,
        });

    // Create variety mutation
    const create = useMutation({
        mutationFn: createVariety,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['varieties'] });
        },
    });

    // Update variety mutation
    const update = useMutation({
        mutationFn: ({ id, data }) => updateVariety(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['varieties'] });
            queryClient.invalidateQueries({ queryKey: ['varieties', variables.id] });
        },
    });

    // Delete variety mutation
    const remove = useMutation({
        mutationFn: deleteVariety,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['varieties'] });
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