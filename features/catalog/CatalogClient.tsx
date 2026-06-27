'use client';

import { useState } from 'react';
import { useCart } from "@/store/useCart";
import { useDebounce } from "@/hooks/useDebounce";
import { useMounted } from "@/hooks/useMounted";

import Navbar from "@/components/Navbar";
import Catalog from "@/features/catalog/Catalog";
import CartModal from "@/features/cart/CartModal";
import Footer from "@/components/footer/Footer";

export default function CatalogClient() {
    const [searchTerm, setSearchTerm] = useState('');
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);


    const debouncedSearchTerm = useDebounce(searchTerm, 350);
    const { totalItems } = useCart();
    const isMounted = useMounted();

    const handleCartOpen = () => setIsCartOpen(true);
    const handleCartClose = () => setIsCartOpen(false);


    return (
        <div className="min-h-screen bg-[#222224] text-white">

            <Navbar
                onCartClick={handleCartOpen}
                onFiltersClick={() => setIsFiltersOpen(true)}
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
                isMounted={isMounted}
            />

            <Catalog
                searchTerm={debouncedSearchTerm}
                onSearchChange={setSearchTerm}
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
            />



            <CartModal
                isOpen={isCartOpen}
                onClose={handleCartClose}
            />
        </div>
    );
}