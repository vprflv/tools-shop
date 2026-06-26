'use client';

import Link from "next/link";
import { ShoppingCart, Phone } from 'lucide-react';
import CallbackButton from '@/features/callback/CallbackButton';
import Logo from "@/components/ui/Logo";

interface HeaderDesktopProps {
    onCartClick: () => void;
    totalItems: number;
    isMounted: boolean;
}

export default function HeaderDesktop({
                                          onCartClick,
                                          totalItems,
                                          isMounted,
                                      }: HeaderDesktopProps) {
    return (
        <div className="hidden lg:block bg-[#19191a] border-b border-[#d25e2d]">

            {/* Верхняя строка — Логотип слева + контакты справа */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Логотип по левому краю */}
                <Logo size="lg" />

                {/* Правая часть */}
                <div className="flex items-center gap-8 text-sm">
                    <p className="flex items-center gap-2 text-[#a1a1aa] hover:text-[#d25e2d] transition-colors">
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">8 (800) 555-35-35</span>
                    </p>
                    <CallbackButton />
                </div>
            </div>

            {/* Нижняя строка — Меню + Корзина */}
            <div className="max-w-7xl mx-auto px-6 py-5">
                <div className="flex items-center">

                    {/* Меню по центру */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex items-center gap-10 text-sm font-medium">
                            <Link href="/catalog" className="hover:text-[#d25e2d] transition-colors">Каталог</Link>
                            <Link href="/about" className="hover:text-[#d25e2d] transition-colors">О магазине</Link>
                            <Link href="/delivery" className="hover:text-[#d25e2d] transition-colors">Доставка</Link>
                            <Link href="/contacts" className="hover:text-[#d25e2d] transition-colors">Контакты</Link>
                        </div>
                    </div>

                    {/* Корзина справа */}
                    <button
                        onClick={onCartClick}
                        className="relative p-3.5 rounded-2xl transition-all active:scale-95 group hover:bg-[#d25e2d]/10"
                    >
                        <ShoppingCart className="w-7 h-7 text-zinc-300 group-hover:text-[#d25e2d] transition-colors" />

                        <div className="absolute inset-0 rounded-2xl bg-[#d25e2d]/10 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10" />

                        {isMounted && totalItems > 0 && (
                            <div className="absolute -top-1.5 -right-1.5 bg-[#d25e2d] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#d25e2d]/30">
                                {totalItems}
                            </div>
                        )}
                    </button>

                </div>
            </div>
        </div>
    );
}