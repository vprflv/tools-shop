'use client';

import Image from 'next/image';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { useRouter } from "next/navigation";
import { getProductImage } from "@/lib/utils/product-image-store";

type CartMobileProps = {
    onClose: () => void;
};

export default function CartMobile({ onClose }: CartMobileProps) {
    const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const router = useRouter();

    return (
        <div className="bg-[#252527] w-full rounded-t-3xl max-h-[88vh] flex flex-col border-t border-[#3a3a3d]">
            {/* Шапка */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#3a3a3d]">
                <h2 className="text-xl font-semibold text-white">
                    Корзина ({items.length})
                </h2>
                <button onClick={onClose} className="p-2 -mr-2 text-zinc-400 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Содержимое */}
            <div className="flex-1 overflow-auto p-5 space-y-4">
                {items.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-2xl text-zinc-400 mb-3">Корзина пуста</p>
                        <p className="text-zinc-500">Добавьте товары из каталога</p>
                    </div>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl p-4"
                        >
                            <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden">
                                <Image
                                    src={getProductImage(item)}
                                    alt={item.name}
                                    fill
                                    sizes="80px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-start">
                                    <h4 className="font-medium leading-tight pr-2 text-base text-white">
                                        {item.name}
                                    </h4>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-400 p-1 -mr-1"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <p className="text-[#d25e2d] font-semibold mt-1 text-base">
                                    {item.price.toLocaleString('ru')} ₽
                                </p>

                                <div className="flex items-center justify-between mt-4">
                                    <div className="flex items-center border border-[#3a3a3d] bg-[#252527] rounded-2xl">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-4 py-3 hover:bg-[#3a3a3d] rounded-l-2xl transition-colors"
                                            disabled={item.quantity === 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-6 font-medium text-base text-white">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-4 py-3 hover:bg-[#3a3a3d] rounded-r-2xl transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <p className="font-semibold text-base text-white">
                                        {(item.price * item.quantity).toLocaleString('ru')} ₽
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Футер */}
            {items.length > 0 && (
                <div className="border-t border-[#3a3a3d] p-5 bg-[#252527]">
                    <div className="flex justify-between text-xl mb-5">
                        <span className="text-zinc-400">Итого:</span>
                        <span className="font-bold text-[#d25e2d]">
                            {totalPrice().toLocaleString('ru')} ₽
                        </span>
                    </div>

                    <button
                        onClick={() => {
                            onClose();
                            router.push('/checkout');
                        }}
                        className="w-full bg-[#d25e2d] hover:bg-[#c44a1c] text-black font-semibold
                                   py-4 rounded-3xl text-base transition-all active:scale-[0.98]"
                    >
                        Оформить заказ
                    </button>

                    <button
                        onClick={clearCart}
                        className="w-full py-4 text-zinc-400 hover:text-red-400 text-sm font-medium mt-2"
                    >
                        Очистить корзину
                    </button>
                </div>
            )}
        </div>
    );
}