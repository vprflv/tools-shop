'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useCatalog } from './hooks/useCatalog';
import Filters from "./filters/Filters";
import ProductCard from "./product/ProductCard";
import ProductCardSkeleton from "./product/ProductCardSkeleton";
import SearchBar from "@/features/search/SearchBar";
import PriceAndSortFilters from "@/features/catalog/filters/components/PriceAndSortFilters";
import getPaginationPages from "@/lib/utils/pagination";
import HelpSelection from "@/features/catalog/help/HelpSelection";
import { ArrowUp } from 'lucide-react';
import Pagination from "@/features/catalog/pagination/Pagination";

type CatalogProps = {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    isFiltersOpen: boolean;
    setIsFiltersOpen: (open: boolean) => void;
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Catalog({
                                    searchTerm,
                                    onSearchChange,
                                    isFiltersOpen,
                                    setIsFiltersOpen
                                }: CatalogProps) {

    const {
        productsLoading,
        paginatedProducts,
        totalPages,
        currentPage,
        goToPage,
        itemsPerPage,
        selectedCategoryIds,
        setSelectedCategoryIds,
        selectedBrandIds,
        setSelectedBrandIds,
        priceRange,
        setPriceRange,
        inStockOnly,
        setInStockOnly,
        sortBy,
        setSortBy,
        resetFilters,
        availableCategories,
        availableBrands,
        filteredProducts,
    } = useCatalog({ searchTerm });

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 min-h-[calc(100vh-180px)] flex flex-col relative bg-[#19191a]">

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 flex-1">

                {/* Левая колонка фильтров */}
                <div className="hidden lg:flex lg:flex-col lg:w-80 flex-shrink-0 gap-8">
                    <div className="mb-8">
                        <Filters
                            selectedCategoryIds={selectedCategoryIds}
                            setSelectedCategoryIds={setSelectedCategoryIds}
                            selectedBrandIds={selectedBrandIds}
                            setSelectedBrandIds={setSelectedBrandIds}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                            inStockOnly={inStockOnly}
                            setInStockOnly={setInStockOnly}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            onReset={resetFilters}
                            availableBrands={availableBrands}
                            availableCategories={availableCategories}
                        />
                    </div>
                    <HelpSelection />
                </div>

                {/* Мобильные фильтры */}
                <div className="lg:hidden">
                    <Filters
                        selectedCategoryIds={selectedCategoryIds}
                        setSelectedCategoryIds={setSelectedCategoryIds}
                        selectedBrandIds={selectedBrandIds}
                        setSelectedBrandIds={setSelectedBrandIds}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        inStockOnly={inStockOnly}
                        setInStockOnly={setInStockOnly}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                        onReset={resetFilters}
                        availableBrands={availableBrands}
                        availableCategories={availableCategories}
                        isOpen={isFiltersOpen}
                        onClose={() => setIsFiltersOpen(false)}
                    />
                </div>

                {/* Основной контент */}
                <div className="flex-1 flex flex-col">

                    {/* Поиск */}
                    <div className="mb-8">
                        <SearchBar
                            value={searchTerm}
                            onChange={onSearchChange}
                            className="w-full max-w-xl"
                        />
                    </div>

                    {/* Сортировка и количество */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <PriceAndSortFilters
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            priceRange={priceRange}
                            setPriceRange={setPriceRange}
                        />

                        <p className="hidden md:block text-zinc-400 text-sm md:text-base whitespace-nowrap">
                            Показано: <span className="text-[#d25e2d] font-medium">
                                {productsLoading ? '—' : Math.min(currentPage * itemsPerPage, filteredProducts.length)}
                            </span> из {filteredProducts.length}
                        </p>
                    </div>

                    {/* Сетка товаров */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 flex-1 content-start">
                        {productsLoading ? (
                            Array.from({ length: 6 }).map((_, index) => (
                                <ProductCardSkeleton key={index} />
                            ))
                        ) : (
                            paginatedProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        )}
                    </div>

                    {/* Пагинация */}
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        goToPage={goToPage}
                    />

                    {/* Пустое состояние */}
                    {!productsLoading && filteredProducts.length === 0 && (
                        <div className="flex-1 flex items-center justify-center py-20">
                            <div className="text-center">
                                <p className="text-2xl text-zinc-400 mb-2">Ничего не найдено 😔</p>
                                <p className="text-zinc-500">Попробуйте изменить параметры поиска или фильтры</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Кнопка "Наверх" */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#252527] hover:bg-[#3a3a3d]
                               border border-[#3a3a3d] hover:border-[#d25e2d] text-white p-4 rounded-2xl
                               shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Наверх"
                >
                    <ArrowUp className="w-6 h-6" />
                </button>
            )}
        </div>
    );
}