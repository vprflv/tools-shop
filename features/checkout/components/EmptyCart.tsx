'use client';

import { useRouter } from 'next/navigation';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function EmptyCart() {
    const router = useRouter();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-[#2e2e30]">
            <div className="w-28 h-28 bg-[#252527] rounded-full flex items-center justify-center mb-8 border border-[#3a3a3d]">
                <ShoppingBag className="w-14 h-14 text-zinc-500" />
            </div>

            <h2 className="text-3xl font-semibold mb-4 text-white">Корзина пуста</h2>
            <p className="text-zinc-400 mb-10 max-w-xs">
                Вы ещё не добавили ни одного товара
            </p>

            <button
                onClick={() => router.push('/catalog')}
                className="group flex items-center gap-3 bg-[#d25e2d] hover:bg-[#c44a1c]
                           text-black font-semibold px-10 py-4 rounded-3xl transition-all text-lg
                           active:scale-[0.98] shadow-md"
            >
                Перейти в каталог
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>
        </div>
    );
}