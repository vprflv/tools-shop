'use client';

import { SlidersHorizontal, ArrowUpDown, RussianRuble } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'new';

type PriceAndSortFiltersProps = {
    sortBy: SortOption;
    setSortBy: (val: SortOption) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
};

export default function PriceAndSortFilters({
                                                sortBy,
                                                setSortBy,
                                                priceRange,
                                                setPriceRange,
                                            }: PriceAndSortFiltersProps) {
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);

    const sortRef = useRef<HTMLDivElement>(null);
    const priceRef = useRef<HTMLDivElement>(null);

    const minPrice = priceRange[0];
    const maxPrice = priceRange[1];

    const displayPrice = minPrice === 0 && maxPrice === 20000
        ? "По цене"
        : `${minPrice.toLocaleString('ru')} — ${maxPrice.toLocaleString('ru')} ₽`;

    const sortLabels: Record<SortOption, string> = {
        popular: "По популярности",
        'price-asc': "Цена ↑",
        'price-desc': "Цена ↓",
        new: "Новинки",
    };

    // Закрытие при клике вне
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
            if (priceRef.current && !priceRef.current.contains(event.target as Node)) {
                setIsPriceOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="flex items-center gap-3">
            {/* Сортировка */}
            <div className="relative" ref={sortRef}>
                <button
                    onClick={() => {
                        setIsSortOpen(!isSortOpen);
                        setIsPriceOpen(false);
                    }}
                    className="flex items-center gap-2 bg-[#252527] hover:bg-[#3a3a3d] border border-[#3a3a3d]
                               px-5 py-3 rounded-2xl transition text-sm whitespace-nowrap text-white"
                >
                    <ArrowUpDown className="w-5 h-5 text-[#d25e2d]" />
                    <span>{sortLabels[sortBy]}</span>
                </button>

                {isSortOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#252527] border border-[#3a3a3d]
                                    rounded-2xl p-2 z-50 shadow-xl">
                        {Object.entries(sortLabels).map(([value, label]) => (
                            <button
                                key={value}
                                onClick={() => {
                                    setSortBy(value as SortOption);
                                    setIsSortOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3 rounded-xl hover:bg-[#3a3a3d] transition-all
                                    ${sortBy === value
                                    ? 'text-[#d25e2d] font-medium'
                                    : 'text-white'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Цена */}
            <div className="relative" ref={priceRef}>
                <button
                    onClick={() => {
                        setIsPriceOpen(!isPriceOpen);
                        setIsSortOpen(false);
                    }}
                    className="flex items-center gap-2 bg-[#252527] hover:bg-[#3a3a3d] border border-[#3a3a3d]
                               px-5 py-3 rounded-2xl transition text-sm whitespace-nowrap text-white"
                >
                    <RussianRuble className="w-5 h-5 text-[#d25e2d]" />
                    <span className="truncate max-w-[170px]">{displayPrice}</span>
                </button>

                {isPriceOpen && (
                    <div className="absolute top-full right-0 mt-2 w-72 bg-[#252527] border border-[#3a3a3d]
                                    rounded-2xl p-5 z-50 shadow-xl">
                        <div className="flex gap-3">
                            <div className="flex-1">
                                <p className="text-xs text-zinc-400 mb-1">От</p>
                                <input
                                    type="text"
                                    value={minPrice === 0 ? '' : minPrice}
                                    onChange={(e) => setPriceRange([e.target.value === '' ? 0 : +e.target.value, maxPrice])}
                                    className="w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-4 py-3
                                               text-white focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30 outline-none"
                                    placeholder="0"
                                />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-zinc-400 mb-1">До</p>
                                <input
                                    type="text"
                                    value={maxPrice === 20000 ? '' : maxPrice}
                                    onChange={(e) => setPriceRange([minPrice, e.target.value === '' ? 20000 : +e.target.value])}
                                    className="w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-4 py-3
                                               text-white focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30 outline-none"
                                    placeholder="20000"
                                />
                            </div>
                        </div>

                        <button
                            onClick={() => setIsPriceOpen(false)}
                            className="mt-5 w-full py-3.5 bg-[#d25e2d] hover:bg-[#c44a1c]
                                       text-black font-semibold rounded-2xl transition-all active:scale-[0.98]"
                        >
                            Применить
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}