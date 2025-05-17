import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBatches, getBatchById, createBatch, updateBatch, deleteBatch } from '../services/batchService';

export const useBatches = () => {
    const queryClient = useQueryClient();

    // Fetch all batches
    const getAll = () =>
        useQuery({
            queryKey: ['batches'],
            queryFn: getBatches,
        });

    // Fetch single batch
    const getById = (id) =>
        useQuery({
            queryKey: ['batches', id],
            queryFn: () => getBatchById(id),
            enabled: !!id,
        });

    // Create batch mutation
    const create = useMutation({
        mutationFn: createBatch,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['batches'] });
        },
    });

    // Update batch mutation
    const update = useMutation({
        mutationFn: ({ id, data }) => updateBatch(id, data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['batches'] });
            queryClient.invalidateQueries({ queryKey: ['batches', variables.id] });
        },
    });

    // Delete batch mutation
    const remove = useMutation({
        mutationFn: deleteBatch,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['batches'] });
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