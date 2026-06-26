'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

import {
    getAllOrdersForAdmin,
    updateOrderStatus,
} from "@/features/actions/productActions";
import { AdminOrder } from "@/features/admin/types/admin";

export function useAdminOrders() {
    const queryClient = useQueryClient();

    const { data: orders = [], isLoading } = useQuery({
        queryKey: ['adminOrders'],
        queryFn: getAllOrdersForAdmin,
        staleTime: 60 * 1000,
    });

    const updateStatusMutation = useMutation({
        mutationFn: ({ id, status }: { id: string; status: AdminOrder['status'] }) =>
            updateOrderStatus(id, status),

        onMutate: async ({ id, status }) => {
            await queryClient.cancelQueries({ queryKey: ['adminOrders'] });
            const previousOrders = queryClient.getQueryData<AdminOrder[]>(['adminOrders']);

            queryClient.setQueryData<AdminOrder[]>(['adminOrders'], (old = []) =>
                old.map(order => order.id === id ? { ...order, status } : order)
            );

            return { previousOrders };
        },

        onError: (err, _, context) => {
            if (context?.previousOrders) {
                queryClient.setQueryData(['adminOrders'], context.previousOrders);
            }
            toast.error('Не удалось обновить статус');
        },

        onSuccess: () => toast.success('Статус заказа обновлён'),
    });

    // ==================== УЛУЧШЕННОЕ УДАЛЕНИЕ ====================
    const deleteMutation = useMutation({
        mutationFn: async (id: string) => {
            const res = await fetch(`/api/admin/orders/${id}`, {
                method: 'DELETE'
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.error || 'Не удалось удалить заказ');
            }

            return id; // возвращаем id, чтобы использовать в onSuccess/onMutate
        },

        // ← Оптимистичное удаление
        onMutate: async (id: string) => {
            await queryClient.cancelQueries({ queryKey: ['adminOrders'] });

            const previousOrders = queryClient.getQueryData<AdminOrder[]>(['adminOrders']);

            // Сразу убираем заказ из списка
            queryClient.setQueryData<AdminOrder[]>(['adminOrders'], (old = []) =>
                old.filter(order => order.id !== id)
            );

            return { previousOrders };
        },

        onError: (err, id, context) => {
            console.error('Delete error:', err);
            // Восстанавливаем список при ошибке
            if (context?.previousOrders) {
                queryClient.setQueryData(['adminOrders'], context.previousOrders);
            }
            toast.error(err.message || 'Не удалось удалить заказ');
        },

        onSuccess: () => {
            toast.success('Заказ успешно удалён');
            queryClient.invalidateQueries({ queryKey: ['adminOrders'] });
        },
    });

    return {
        orders,
        isLoading,
        deleteOrder: deleteMutation.mutateAsync,
        updateOrderStatus: updateStatusMutation.mutate,
        isUpdating: updateStatusMutation.isPending,
        isDeleting: deleteMutation.isPending,
    };
}