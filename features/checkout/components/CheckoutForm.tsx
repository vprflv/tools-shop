'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCheckout } from '../hooks/useCheckout';
import OrderSummary from "@/features/checkout/components/OrderSummary";
import Link from "next/link";

export default function CheckoutForm() {
    const router = useRouter();
    const checkout = useCheckout();
    const [agreePolicy, setAgreePolicy] = useState(false);

    const {
        formData,
        deliveryType,
        isSubmitting,
        handleChange,
        handleSubmit,
        setDeliveryType,
    } = checkout;

    const isFormValid =
        agreePolicy &&
        formData.fullName.trim().length > 2 &&
        formData.phone.trim().length >= 10 &&
        (deliveryType !== 'courier' || formData.address.trim().length > 5);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Левая колонка — форма */}
            <div className="lg:col-span-3">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-zinc-400 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5" />
                    Назад
                </button>

                <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
                    Оформление заказа
                </h1>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Контактные данные */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-white">Контактные данные</h2>
                        <div className="space-y-5">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="ФИО *"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full bg-[#252527] border border-[#3a3a3d] rounded-2xl px-5 py-4
                                           text-base text-white placeholder:text-zinc-500
                                           focus:outline-none focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30"
                                required
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Телефон *"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-[#252527] border border-[#3a3a3d] rounded-2xl px-5 py-4
                                           text-base text-white placeholder:text-zinc-500
                                           focus:outline-none focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email (необязательно)"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-[#252527] border border-[#3a3a3d] rounded-2xl px-5 py-4
                                           text-base text-white placeholder:text-zinc-500
                                           focus:outline-none focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30"
                            />
                        </div>
                    </div>

                    {/* Способ получения */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-6 text-white">Способ получения</h2>

                        <div className="grid grid-cols-2 gap-3 mb-6">
                            <button
                                type="button"
                                onClick={() => setDeliveryType('courier')}
                                className={`py-4 rounded-2xl border transition-all text-base font-medium ${
                                    deliveryType === 'courier'
                                        ? 'border-[#d25e2d] bg-[#d25e2d]/10 text-white'
                                        : 'border-[#3a3a3d] hover:border-[#d25e2d]/70 text-zinc-300'
                                }`}
                            >
                                Курьер
                            </button>

                            <button
                                type="button"
                                onClick={() => setDeliveryType('pickup')}
                                className={`py-4 rounded-2xl border transition-all text-base font-medium ${
                                    deliveryType === 'pickup'
                                        ? 'border-[#d25e2d] bg-[#d25e2d]/10 text-white'
                                        : 'border-[#3a3a3d] hover:border-[#d25e2d]/70 text-zinc-300'
                                }`}
                            >
                                Самовывоз
                            </button>
                        </div>

                        {deliveryType === 'courier' && (
                            <input
                                type="text"
                                name="address"
                                placeholder="Адрес доставки *"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full bg-[#252527] border border-[#3a3a3d] rounded-2xl px-5 py-4
                                           text-base text-white placeholder:text-zinc-500
                                           focus:outline-none focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30"
                                required
                            />
                        )}
                    </div>

                    {/* Комментарий */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4 text-white">Комментарий к заказу</h2>
                        <textarea
                            name="comment"
                            placeholder="Подъезд, этаж, домофон, пожелания..."
                            value={formData.comment}
                            onChange={handleChange}
                            rows={4}
                            className="w-full bg-[#252527] border border-[#3a3a3d] rounded-3xl px-5 py-4
                                       text-base text-white placeholder:text-zinc-500
                                       focus:outline-none focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30"
                        />
                    </div>

                    {/* Мобильная сводка */}
                    <div className="lg:hidden pt-4 pb-6 border-t border-[#3a3a3d]">
                        <OrderSummary
                            items={checkout.items}
                            totalPrice={checkout.totalPrice}
                            onRemove={checkout.removeFromCart}
                        />
                    </div>

                    {/* Согласие с политикой */}
                    <div className="pt-4">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={agreePolicy}
                                onChange={(e) => setAgreePolicy(e.target.checked)}
                                className="mt-1 w-5 h-5 accent-[#d25e2d] bg-[#252527] border-[#3a3a3d]"
                            />
                            <span className="text-sm text-zinc-400">
                                Я согласен с{' '}
                                <Link
                                    href="/policy/privacy"
                                    target="_blank"
                                    className="text-[#d25e2d] hover:text-[#ff8a5c] hover:underline transition-colors"
                                >
                                    политикой конфиденциальности
                                </Link>{' '}
                                и условиями обработки персональных данных
                            </span>
                        </label>
                    </div>

                    {/* Кнопка оформления */}
                    <button
                        type="submit"
                        disabled={isSubmitting || !isFormValid}
                        className="w-full bg-[#d25e2d] hover:bg-[#c44a1c] disabled:bg-[#3a3a3d]
                                   disabled:cursor-not-allowed text-black font-semibold text-xl
                                   py-5 rounded-3xl transition-all active:scale-[0.98]"
                    >
                        {isSubmitting
                            ? 'Оформляем заказ...'
                            : `Подтвердить заказ — ${checkout.totalPrice.toLocaleString('ru')} ₽`}
                    </button>
                </form>
            </div>

            {/* Правая колонка (десктоп) */}
            <div className="hidden lg:block lg:col-span-2">
                <OrderSummary
                    items={checkout.items}
                    totalPrice={checkout.totalPrice}
                    onRemove={checkout.removeFromCart}
                />
            </div>
        </div>
    );
}