'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white">
            {/* Хедер с навигацией */}
            <div className="border-b border-[#3a3a3d] bg-[#252527] sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-5 sm:px-6 py-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-[#d25e2d] hover:text-white transition-colors text-sm font-medium"
                    >
                        ← На главную
                    </Link>
                </div>
            </div>

            {/* Основной контент */}
            <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-10 pb-20">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        ИнсTRYмент — инструмент,<br />которому можно доверять
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 mt-6 max-w-2xl mx-auto">
                        Мы помогаем мастерам и строителям работать уверенно и эффективно
                    </p>
                </div>

                <div className="prose prose-invert prose-zinc max-w-none text-[17px] md:text-[17.5px] leading-relaxed">

                    <p>
                        ИнсTRYмент — современный магазин профессионального и бытового инструмента.
                        Мы тщательно отбираем продукцию, чтобы каждый мастер мог найти надёжный инструмент,
                        который будет служить годами.
                    </p>

                    <h2 className="text-3xl font-semibold mt-16 mb-10 text-center md:text-left">
                        Почему выбирают нас
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-[#252527] p-7 md:p-8 rounded-3xl border border-[#3a3a3d] hover:border-[#d25e2d]/50 transition-all">
                            <div className="text-[#d25e2d] text-4xl mb-5">🔧</div>
                            <h3 className="text-xl font-semibold mb-3">Только проверенный инструмент</h3>
                            <p className="text-zinc-400">
                                Работаем исключительно с известными брендами. Каждый товар проходит контроль качества.
                            </p>
                        </div>

                        <div className="bg-[#252527] p-7 md:p-8 rounded-3xl border border-[#3a3a3d] hover:border-[#d25e2d]/50 transition-all">
                            <div className="text-[#d25e2d] text-4xl mb-5">📦</div>
                            <h3 className="text-xl font-semibold mb-3">Широкий ассортимент</h3>
                            <p className="text-zinc-400">
                                Электроинструмент, ручной инструмент, садовая техника, расходники и многое другое.
                            </p>
                        </div>

                        <div className="bg-[#252527] p-7 md:p-8 rounded-3xl border border-[#3a3a3d] hover:border-[#d25e2d]/50 transition-all">
                            <div className="text-[#d25e2d] text-4xl mb-5">🛡️</div>
                            <h3 className="text-xl font-semibold mb-3">Честные рекомендации</h3>
                            <p className="text-zinc-400">
                                Помогаем выбрать именно тот инструмент, который будет максимально эффективен для ваших задач.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-semibold mt-20 mb-8 text-center md:text-left">
                        Наша философия
                    </h2>
                    <p className="text-lg">
                        Мы уверены, что качественный инструмент — это не просто покупка, а инвестиция в комфорт,
                        скорость и результат работы.
                    </p>
                    <p className="text-lg mt-6">
                        ИнсTRYмент — это место, где профессионалы и домашние мастера находят надёжный инструмент
                        по честной цене.
                    </p>

                    {/* Блок с призывом */}
                    <div className="mt-20 bg-[#252527] border border-[#d25e2d]/30 rounded-3xl p-10 md:p-14 text-center">
                        <h3 className="text-2xl md:text-3xl font-semibold mb-5">
                            Готовы обновить свой арсенал?
                        </h3>
                        <Link
                            href="/catalog"
                            className="inline-flex items-center gap-3 bg-[#d25e2d] hover:bg-[#c44a1c]
                                       text-black font-semibold px-10 py-4 rounded-2xl transition-all text-lg group"
                        >
                            Перейти в каталог
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}