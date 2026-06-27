'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import ProductForm from "@/features/admin/products/new/components/ProductForm/ProductForm";

export default function NewProductPage() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white">
            <div className="max-w-4xl mx-auto px-6 py-8 md:py-10">

                {/* Навигация назад */}
                <div className="flex items-center gap-4 mb-10">
                    <Link
                        href="/admin/products"
                        className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                    >
                        <div className="w-9 h-9 flex items-center justify-center bg-[#252527] border border-[#3a3a3d] rounded-2xl group-hover:border-[#d25e2d] transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </div>
                        <span className="font-medium">Назад к товарам</span>
                    </Link>
                </div>

                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold">Добавить новый товар</h1>
                    <p className="text-zinc-400 mt-2">
                        Заполните информацию о товаре
                    </p>
                </div>

                {/* Форма */}
                <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-6 md:p-10">
                    <ProductForm />
                </div>
            </div>
        </div>
    );
}