'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Logo from "@/components/ui/Logo";
import Navbar from "@/components/Navbar";
import CartModal from "@/features/cart/CartModal";
import HeroSlider from "@/features/home/slider/HeroSlider";

export default function Home() {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleCartOpen = () => setIsCartOpen(true);
    const handleCartClose = () => setIsCartOpen(false);
    const handleFiltersClick = () => {
        setIsFiltersOpen(!isFiltersOpen);
    };

    return (
        <div className="min-h-screen bg-[#222224] text-white">
            {/* ====================== НАВИГАЦИЯ ====================== */}
            <Navbar
                onCartClick={handleCartOpen}
                onFiltersClick={handleFiltersClick}
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
                isMounted={isMounted}
                showFiltersAndCart={false}
            />

            {/* ====================== ОСНОВНОЙ КОНТЕНТ С ГРАНИЦЕЙ ====================== */}
            <div className="max-w-7xl mx-auto  bg-[#19191a] min-h-screen">

                {/* ====================== ГЛАВНЫЙ БАННЕР ====================== */}
                <div className="hidden md:block">
                    <HeroSlider />
                </div>

                {/* ====================== БЛОКИ КАТЕГОРИЙ ====================== */}
                <section className="px-6 py-16">
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Карточка 1 */}
                        <Link
                            href="/catalog?category=электроинструмент"
                            className="group bg-[#252527] border border-[#3a3a3d] rounded-2xl overflow-hidden hover:border-[#d25e2d] hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="relative h-[200px] md:h-[205px] lg:h-[210px] overflow-hidden bg-[#1c1c1e]">
                                <Image
                                    src="/images/electrical.jpg"
                                    alt="Электроинструмент"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Электроинструмент</h3>
                                <p className="text-[#a1a1aa] mt-1">Дрели, болгарки, шуруповёрты и др.</p>
                            </div>
                        </Link>

                        {/* Карточка 2 */}
                        <Link
                            href="/catalog?category=ручной-инструмент"
                            className="group bg-[#252527] border border-[#3a3a3d] rounded-2xl overflow-hidden hover:border-[#d25e2d] hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="relative h-[200px] md:h-[205px] lg:h-[210px] overflow-hidden bg-[#1c1c1e]">
                                <Image
                                    src="/images/tools258.jpg"
                                    alt="Ручной инструмент"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Ручной инструмент</h3>
                                <p className="text-[#a1a1aa] mt-1">Ключи, отвёртки, молотки</p>
                            </div>
                        </Link>

                        {/* Карточка 3 */}
                        <Link
                            href="/catalog?category=садовый-инструмент"
                            className="group bg-[#252527] border border-[#3a3a3d] rounded-2xl overflow-hidden hover:border-[#d25e2d] hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="relative h-[200px] md:h-[205px] lg:h-[210px] overflow-hidden bg-[#1c1c1e]">
                                <Image
                                    src="/images/garden.jpg"
                                    alt="Садовый инструмент"
                                    fill
                                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-white">Садовый инструмент</h3>
                                <p className="text-[#a1a1aa] mt-1">Газонокосилки, триммеры, секаторы</p>
                            </div>
                        </Link>

                    </div>
                </section>

            </div>



            <CartModal
                isOpen={isCartOpen}
                onClose={handleCartClose}
            />
        </div>
    );
}