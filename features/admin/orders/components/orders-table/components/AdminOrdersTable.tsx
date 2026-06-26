'use client';

import { useState, useMemo } from 'react';
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    type SortingState,
} from '@tanstack/react-table';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { AdminOrder } from '@/features/admin/types/admin';
import OrderDetailModal from "@/features/admin/orders/components/OrderDetailModal";

import { ordersTableColumns } from '../config/ordersTableColumns';
import { useAdminOrders } from "@/features/admin/orders/hooks/useAdminOrders";
import AdminOrdersHeader from "@/features/admin/orders/components/orders-table/components/AdminOrdersHeader";
import AdminOrdersDataTable from "@/features/admin/orders/components/orders-table/components/AdminOrdersDataTable";
import AdminOrdersPagination from "@/features/admin/orders/components/orders-table/components/AdminOrdersPagination";

export default function AdminOrdersTable() {
    const { orders, isLoading, updateOrderStatus, deleteOrder } = useAdminOrders();

    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleViewOrder = (order: AdminOrder) => setSelectedOrder(order);

    const handleDeleteOrder = async (id: string, orderNumber: string) => {
        if (deletingId) return;

        const confirmed = window.confirm(`Удалить заказ #${orderNumber}? Это действие нельзя отменить.`);
        if (!confirmed) return;

        setDeletingId(id);

        try {
            await deleteOrder(id);
            toast.success(`Заказ #${orderNumber} успешно удалён`);
        } catch (error) {
            toast.error('Не удалось удалить заказ');
            console.error(error);
        } finally {
            setDeletingId(null);
        }
    };

    const handleStatusChange = (id: string, status: AdminOrder['status']) => {
        updateOrderStatus({ id, status });
    };

    const columns = useMemo(
        () => ordersTableColumns({
            onView: handleViewOrder,
            onDelete: handleDeleteOrder,
            deletingId,
        }),
        [deletingId]
    );

    const table = useReactTable({
        data: orders,
        columns,
        state: { sorting, globalFilter },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    if (isLoading) {
        return (
            <div className="flex items-center justify-center py-20 md:py-32">
                <Loader2 className="w-8 h-8 animate-spin text-[#d25e2d]" />
            </div>
        );
    }

    return (
        <>
            <div className="p-4 md:p-6">
                <AdminOrdersHeader totalOrders={orders.length} />

                <AdminOrdersDataTable
                    table={table}
                    deletingId={deletingId}
                />

                <AdminOrdersPagination table={table} />
            </div>

            <OrderDetailModal
                order={selectedOrder}
                isOpen={!!selectedOrder}
                onClose={() => setSelectedOrder(null)}
                onStatusChange={handleStatusChange}
            />
        </>
    );
}