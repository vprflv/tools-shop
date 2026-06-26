'use client';

import getPaginationPages from "@/lib/utils/pagination";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    goToPage: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, goToPage }: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-auto pt-12 pb-8 flex justify-center">
            <div className="flex items-center gap-2 bg-[#252527] border border-[#3a3a3d] rounded-3xl p-2">

                {/* Кнопка Назад */}
                <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-5 py-3 hover:bg-[#3a3a3d] rounded-2xl disabled:opacity-40
                               disabled:cursor-not-allowed transition-all text-white"
                >
                    ← Назад
                </button>

                {/* Номера страниц */}
                <div className="flex items-center gap-1">
                    {getPaginationPages(currentPage, totalPages).map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && goToPage(page)}
                            className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all text-sm font-medium ${
                                page === currentPage
                                    ? 'bg-[#d25e2d] text-black font-semibold scale-110'
                                    : 'hover:bg-[#3a3a3d] text-zinc-300 hover:scale-105'
                            } ${page === '...' ? 'cursor-default text-zinc-500 pointer-events-none' : ''}`}
                        >
                            {page}
                        </button>
                    ))}
                </div>

                {/* Кнопка Вперёд */}
                <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-5 py-3 hover:bg-[#3a3a3d] rounded-2xl disabled:opacity-40
                               disabled:cursor-not-allowed transition-all text-white"
                >
                    Вперёд →
                </button>
            </div>
        </div>
    );
}