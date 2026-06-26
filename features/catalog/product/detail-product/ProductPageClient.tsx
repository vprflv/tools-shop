'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { useProduct } from '@/hooks/queries/products';

import ProductImage from "./components/ProductImage";
import ProductInfo from "./components/ProductInfo";
import ProductCartSection from "./components/ProductCartSection";
import ProductDescription from "./components/ProductDescription";
import ProductSpecs from "./components/ProductSpecs";
import CartModal from "@/features/cart/CartModal";
import ProductDetailSkeleton from "@/features/catalog/product/detail-product/ProductDetailSkeleton";

export default function ProductPageClient({ id }: { id: number }) {
    const router = useRouter();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const { data: product, isLoading, error } = useProduct(id);

    if (isLoading || !product) {
        return (
            <div className="min-h-screen bg-[#2e2e30] flex items-center justify-center">
                <ProductDetailSkeleton />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#2e2e30] flex flex-col items-center justify-center gap-6">
                <h2 className="text-4xl font-semibold text-red-400">Ошибка загрузки товара</h2>
                <button
                    onClick={() => router.push('/catalog')}
                    className="px-8 py-4 bg-[#d25e2d] hover:bg-[#c44a1c] text-black rounded-2xl
                               font-semibold transition-all active:scale-95"
                >
                    ← Вернуться в каталог
                </button>
            </div>
        );
    }

    const normalizedProduct = {
        ...product,
        category: product.category?.name || product.category || '',
        brand: product.brand?.name || product.brand || '',
    };

    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">

            {/* Верхняя sticky панель */}
            <div className="border-b border-[#3a3a3d] bg-[#252527] sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-zinc-400 hover:text-[#d25e2d] transition-colors"
                    >
                        ← Назад в каталог
                    </button>
                    <div className="text-sm text-zinc-500 font-mono">
                        Арт. {product.article}
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-10">
                {/* Основная сетка: Галерея + Информация */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <ProductImage product={normalizedProduct} />

                    {/* Правая колонка */}
                    <div className="flex flex-col">
                        <ProductInfo product={normalizedProduct} />
                        <ProductSpecs product={normalizedProduct} />
                        <ProductCartSection
                            product={normalizedProduct}
                            onOpenCart={() => setIsCartOpen(true)}
                        />
                    </div>
                </div>

                {/* Описание */}
                <div className="mt-16 lg:mt-20 border-t border-[#3a3a3d] pt-12">
                    <ProductDescription product={normalizedProduct} />
                </div>
            </div>

            <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
}