'use client';

import Link from "next/link";
import { ShoppingCart, Menu, X, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

interface HeaderMobileProps {
    onCartClick: () => void;
    totalItems: number;
    isMounted: boolean;
    onFiltersClick: () => void;
    showFiltersAndCart?: boolean;
}

export default function HeaderMobile({
                                         onCartClick,
                                         totalItems,
                                         isMounted,
                                         onFiltersClick,
                                         showFiltersAndCart = true,
                                     }: HeaderMobileProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="lg:hidden border-b border-[#3a3a3d] bg-[#252527]">

            {/* Верхняя строка: Логотип + Бургер */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-[#3a3a3d]">
                <Link href="/" className="flex items-center gap-3 relative flex-shrink-0">
                    <img
                        src="/logo.png"
                        alt="ИнсTRYмент"
                        className="h-15 w-auto object-contain drop-shadow-[0_0_4px_#d25e2d] -mt-1 z-10"
                    />
                    <div className="flex flex-col -space-y-0.5">
                        <div className="text-xl font-black tracking-[-1px] text-[#d25e2d] leading-none">
                            ИНС<span className="text-white">TRY</span>МЕНТ
                        </div>
                    </div>
                </Link>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="p-2 text-zinc-300 hover:text-white transition-colors"
                >
                    <Menu className="w-7 h-7 text-[#d25e2d]" />
                </button>
            </div>

            {/* ====================== ФИЛЬТРЫ + КОРЗИНА ====================== */}
            {showFiltersAndCart && (
                <div className="flex items-center justify-between px-4 py-3 bg-[#252527]">
                    <button
                        onClick={onFiltersClick}
                        className="flex items-center gap-2.5 px-5 py-2.5 bg-[#1c1c1e] hover:bg-[#3a3a3d]
                                   border border-[#3a3a3d] rounded-2xl transition-all active:scale-95"
                    >
                        <SlidersHorizontal className="w-5 h-5 text-[#d25e2d]" />
                    </button>

                    <button
                        onClick={onCartClick}
                        className="relative p-3 active:scale-95 transition-transform"
                    >
                        <ShoppingCart className="w-6 h-6 text-[#d25e2d]" />
                        {isMounted && totalItems > 0 && (
                            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold
                                           w-5 h-5 rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#252527]">
                                {totalItems}
                            </div>
                        )}
                    </button>
                </div>
            )}

            {/* Мобильное меню */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
                    <div className="flex items-center justify-between p-4 border-b border-[#3a3a3d]">
                        <div className="text-xl font-bold text-[#d25e2d]">Меню</div>
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-2 text-zinc-400 hover:text-white"
                        >
                            <X className="w-7 h-7" />
                        </button>
                    </div>

                    <div className="flex flex-col p-6 space-y-6 text-lg font-medium">
                        <Link href="/catalog" className="hover:text-[#d25e2d] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Каталог
                        </Link>
                        <Link href="/about" className="hover:text-[#d25e2d] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            О магазине
                        </Link>
                        <Link href="/delivery" className="hover:text-[#d25e2d] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Доставка
                        </Link>
                        <Link href="/contacts" className="hover:text-[#d25e2d] transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                            Контакты
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}