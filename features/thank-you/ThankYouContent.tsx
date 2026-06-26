'use client';

import Link from 'next/link';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

export default function ThankYouContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const orderNumber = searchParams.get('orderNumber');
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const hasProcessed = useRef(false);

    useEffect(() => {
        if (!orderNumber) {
            router.replace('/');
            return;
        }

        if (hasProcessed.current) return;
        hasProcessed.current = true;

        const justOrdered = localStorage.getItem('justOrdered');

        if (justOrdered === 'true') {
            setIsValid(true);
            localStorage.removeItem('justOrdered');
        } else {
            router.replace('/');
        }
    }, [orderNumber, router]);

    if (isValid === null) {
        return (
            <div className="min-h-screen bg-[#2e2e30] flex items-center justify-center">
                <div className="text-zinc-400">Проверка доступа...</div>
            </div>
        );
    }

    if (!isValid) return null;

    return (
        <div className="min-h-screen bg-[#2e2e30] text-white flex items-center justify-center px-4 py-12">
            <div className="max-w-md w-full text-center">
                {/* Иконка успеха */}
                <div className="mx-auto mb-8 flex justify-center">
                    <div className="w-28 h-28 bg-[#d25e2d]/10 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-20 h-20 text-[#d25e2d]" />
                    </div>
                </div>

                <h1 className="text-5xl font-bold mb-4">Спасибо!</h1>
                <p className="text-2xl text-zinc-300 mb-3">Ваш заказ успешно оформлен</p>
                <p className="text-zinc-400 mb-12">
                    Мы свяжемся с вами в ближайшее время для подтверждения деталей.
                </p>

                {/* Блок с номером заказа */}
                <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-8 mb-10">
                    <p className="text-sm uppercase tracking-widest text-zinc-500 mb-1">
                        Номер заказа
                    </p>
                    <p className="text-3xl font-mono font-bold text-[#d25e2d]">
                        #{orderNumber}
                    </p>
                    <p className="text-sm text-emerald-400 mt-4 font-medium">
                        Статус: Принят в обработку
                    </p>
                </div>

                {/* Кнопка на главную */}
                <Link
                    href="/"
                    className="group flex items-center justify-center gap-3 bg-[#d25e2d] hover:bg-[#c44a1c]
                               text-black font-semibold py-5 rounded-3xl transition-all text-lg
                               active:scale-[0.98] shadow-lg"
                >
                    <Home className="w-5 h-5" />
                    Вернуться на главную
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>
            </div>
        </div>
    );
}