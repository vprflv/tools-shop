'use client';

import { useCart } from '@/store/useCart';


import HeaderMobile from "@/components/header/HeaderMobile";
import HeaderDesktop from "@/components/header/ HeaderDesktop";

interface NavbarProps {
    onCartClick: () => void;
    onFiltersClick: () => void;
    isFiltersOpen: boolean;
    setIsFiltersOpen: (open: boolean) => void;
    isMounted: boolean;
    showFiltersAndCart?: boolean;
}

export default function Navbar({
                                   onCartClick,
                                   onFiltersClick,
                                   isFiltersOpen,
                                   setIsFiltersOpen,
                                   isMounted,
                                   showFiltersAndCart = true,
                               }: NavbarProps) {
    const { totalItems } = useCart();

    return (
        <header className="sticky top-0 z-50 bg-[#222224]">
            {/* Контейнер с такой же шириной и границами, как в контенте */}
            <div className="max-w-7xl mx-auto  bg-[#19191a]">
                <div className="px-4 sm:px-6">

                    <HeaderDesktop
                        onCartClick={onCartClick}
                        totalItems={totalItems()}
                        isMounted={isMounted}
                    />

                    <HeaderMobile
                        onCartClick={onCartClick}
                        totalItems={totalItems()}
                        isMounted={isMounted}
                        onFiltersClick={onFiltersClick}
                        showFiltersAndCart={showFiltersAndCart}
                    />

                </div>
            </div>
        </header>
    );
}