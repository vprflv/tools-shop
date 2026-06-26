'use client';

import { Suspense } from 'react';
import { useCheckout } from "@/features/checkout/hooks/useCheckout";
import EmptyCart from "@/features/checkout/components/EmptyCart";
import CheckoutForm from "@/features/checkout/components/CheckoutForm";

function CheckoutContent() {
    const checkout = useCheckout();

    if (checkout.items.length === 0) {
        return <EmptyCart />;
    }

    return <CheckoutForm />;
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<CheckoutLoading />}>
            <div className="min-h-screen bg-[#2e2e30] text-white pb-28">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6">
                    <CheckoutContent />
                </div>
            </div>
        </Suspense>
    );
}

function CheckoutLoading() {
    return (
        <div className="min-h-screen bg-[#2e2e30] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-[#3a3a3d] border-t-[#d25e2d] rounded-full animate-spin" />
                <p className="text-zinc-400">Загрузка оформления заказа...</p>
            </div>
        </div>
    );
}