'use client';

import Image from 'next/image';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { useRouter } from "next/navigation";
import { getProductImage } from "@/lib/utils/product-image-store";

type CartDesktopProps = {
    onClose: () => void;
};

export default function CartDesktop({ onClose }: CartDesktopProps) {
    const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const router = useRouter();

    return (
        <div className="bg-[#252527] w-full max-w-2xl mx-4 rounded-3xl overflow-hidden border border-[#3a3a3d]">

            {/* Заголовок */}
            <div className="flex items-center justify-between border-b border-[#3a3a3d] px-8 py-6">
                <h2 className="text-2xl font-semibold text-white">
                    Корзина ({items.length})
                </h2>
                <button onClick={onClose} className="text-zinc-400 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Содержимое */}
            <div className="max-h-[60vh] overflow-auto p-8 space-y-6">
                {items.length === 0 ? (
                    <div className="text-center py-16">
                        <p className="text-2xl text-zinc-400 mb-2">Корзина пуста</p>
                        <p className="text-zinc-500">Добавьте товары из каталога</p>
                    </div>
                ) : (
                    items.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-6 bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl p-5"
                        >
                            <div className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                                <Image
                                    src={getProductImage(item)}
                                    alt={item.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between">
                                    <h4 className="font-medium leading-tight text-lg text-white">
                                        {item.name}
                                    </h4>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-400"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <p className="text-[#d25e2d] font-semibold mt-1 text-lg">
                                    {item.price.toLocaleString('ru')} ₽
                                </p>

                                <div className="flex items-center justify-between mt-5">
                                    <div className="flex items-center border border-[#3a3a3d] bg-[#252527] rounded-2xl">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="px-5 py-3 hover:bg-[#3a3a3d] rounded-l-2xl transition-colors"
                                            disabled={item.quantity === 1}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="px-7 font-medium text-lg text-white">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-5 py-3 hover:bg-[#3a3a3d] rounded-r-2xl transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <p className="font-semibold text-lg text-white">
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
                <div className="border-t border-[#3a3a3d] p-8">
                    <div className="flex justify-between text-2xl mb-6">
                        <span className="text-zinc-400">Итого:</span>
                        <span className="font-bold text-[#d25e2d]">
                            {totalPrice().toLocaleString('ru')} ₽
                        </span>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={() => {
                                onClose();
                                router.push('/checkout');
                            }}
                            className="w-full bg-[#d25e2d] hover:bg-[#c44a1c] text-black font-semibold
                                       py-4 rounded-3xl text-xl transition-all active:scale-[0.98]"
                        >
                            Оформить заказ
                        </button>

                        <button
                            onClick={clearCart}
                            className="w-full py-4 text-zinc-400 hover:text-red-400 transition-colors"
                        >
                            Очистить корзину
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}