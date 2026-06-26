'use client';

import {
    flexRender,
    type Table,
} from '@tanstack/react-table';
import { AdminOrder } from '@/features/admin/types/admin';

interface AdminOrdersDataTableProps {
    table: Table<AdminOrder>;
    deletingId?: string | null;
}

export default function AdminOrdersDataTable({
                                                 table,
                                                 deletingId = null
                                             }: AdminOrdersDataTableProps) {
    return (
        <div className="bg-[#252527] border border-[#3a3a3d] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                    <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="border-b border-[#3a3a3d]">
                            {headerGroup.headers.map(header => (
                                <th
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-medium text-zinc-400 cursor-pointer hover:text-white whitespace-nowrap"
                                >
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {header.column.getIsSorted() && (
                                        <span className="ml-1">
                                                {header.column.getIsSorted() === 'desc' ? '↓' : '↑'}
                                            </span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody>
                    {table.getRowModel().rows.length ? (
                        table.getRowModel().rows.map(row => {
                            const isDeleting = deletingId === row.original.id;

                            return (
                                <tr
                                    key={row.id}
                                    className={`border-b border-[#3a3a3d] transition-all duration-200
                                            ${isDeleting
                                        ? 'opacity-50 pointer-events-none bg-red-500/5'
                                        : 'hover:bg-[#3a3a3d]/60'
                                    }`}
                                >
                                    {row.getVisibleCells().map(cell => (
                                        <td
                                            key={cell.id}
                                            className="px-4 md:px-6 py-4 text-sm md:text-base"
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={6} className="py-16 text-center text-zinc-500">
                                Заказы не найдены
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}