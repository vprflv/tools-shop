'use client';

import { type Product } from '@/lib/mock-products';
import CartQuantityControls from "@/components/CartQuantityControls";
import { useCart } from "@/store/useCart";

type Props = {
    product: Product;
    onOpenCart: () => void;
};

export default function ProductCartSection({ product, onOpenCart }: Props) {
    const { items } = useCart();
    const isInCart = items.some(item => item.id === product.id);

    return (
        <div className="mb-8">
            <CartQuantityControls product={product} />

            {/* Кнопка "Перейти в корзину" */}
            {isInCart && (
                <button
                    onClick={onOpenCart}
                    className="mt-4 w-full text-center bg-[#d25e2d] hover:bg-[#c44a1c]
                               text-black font-semibold py-4 rounded-3xl transition-all
                               active:scale-[0.98] shadow-md hover:shadow-[0_0_15px_#d25e2d]/50"
                >
                    Перейти в корзину →
                </button>
            )}
        </div>
    );
}