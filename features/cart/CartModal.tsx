'use client';



import CartMobile from "@/features/cart/components/CartMobile";
import CartDesktop from "@/features/cart/components/CartDesktop";

type CartModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function CartModal({ isOpen, onClose }: CartModalProps) {
    if (!isOpen) return null;

    return (
        <>
            {/* Мобильная версия (Bottom Sheet) */}
            <div className="lg:hidden fixed inset-0 z-50 flex items-end bg-black/80 backdrop-blur-sm">
                <CartMobile onClose={onClose} />
            </div>

            {/* Десктопная версия (Модальное окно) */}
            <div className="hidden lg:flex fixed inset-0 z-50 items-center justify-center bg-black/80 backdrop-blur-sm">
                <CartDesktop onClose={onClose} />
            </div>
        </>
    );
}