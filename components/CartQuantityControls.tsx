'use client';

import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { type Product } from '@/lib/mock-products';

type CartQuantityControlsProps = {
    product: Product;
    className?: string;
};

export default function CartQuantityControls({
                                                 product,
                                                 className = '',
                                             }: CartQuantityControlsProps) {

    const { addToCart, items, updateQuantity, removeFromCart } = useCart();

    const cartItem = items.find(item => item.id === product.id);
    const isInCart = !!cartItem;

    const handleAdd = () => addToCart(product);

    const handleDecrease = () => {
        if (cartItem?.quantity === 1) {
            removeFromCart(product.id);
        } else if (cartItem) {
            updateQuantity(product.id, cartItem.quantity - 1);
        }
    };

    if (!isInCart) {
        return (
            <button
                onClick={handleAdd}
                className={`w-full mt-5 bg-[#252527] hover:bg-[#3a3a3d] 
                border-2 border-[#d25e2d] hover:border-[#ff8a5c]
                text-white hover:text-white font-semibold py-4 rounded-3xl 
                flex items-center justify-center gap-3 transition-all text-base 
                active:scale-[0.97] shadow-sm ${className}`}
            >
                <ShoppingCart className="w-5 h-5" />
                Добавить в корзину
            </button>
        );
    }

    // Счётчик когда товар уже в корзине
    return (
        <div className={`w-full ${className}`}>
            <div className="flex items-center justify-center gap-4 bg-[#252527] border border-[#3a3a3d] rounded-3xl py-2.5 px-2">

                <button
                    onClick={handleDecrease}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#3a3a3d]
                               text-zinc-400 hover:text-white rounded-2xl transition-all active:scale-90"
                >
                    <Minus className="w-4 h-4" />
                </button>

                <span className="text-xl font-semibold text-[#d25e2d] w-12 text-center tabular-nums">
                    {cartItem.quantity}
                </span>

                <button
                    onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-[#3a3a3d]
                               text-zinc-400 hover:text-white rounded-2xl transition-all active:scale-90"
                >
                    <Plus className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}