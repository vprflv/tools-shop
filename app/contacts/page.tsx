'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactsPage() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">
            <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 md:py-16">

                <Link
                    href="/"
                    className="text-[#d25e2d] hover:text-white mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                    ← На главную
                </Link>

                <h1 className="text-4xl sm:text-5xl font-bold mb-10">Контакты</h1>

                <div className="grid md:grid-cols-2 gap-10 md:gap-16">

                    {/* Левая колонка — Основные контакты */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">Связаться с нами</h2>

                            {/* Главный телефон */}
                            <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-7 md:p-9 mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#d25e2d]/10 rounded-2xl flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-[#d25e2d]" />
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-widest text-zinc-500">Телефон</p>
                                        <p className="text-xl md:text-xl font-semibold text-white mt-1">
                                            8 (913) 519-79-27
                                        </p>
                                        <p className="text-zinc-400 mt-2">Ежедневно с 9:00 до 21:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#d25e2d]" />
                                Адрес магазина
                            </h3>
                            <p className="text-lg text-zinc-300">
                                г. Красноярск,<br />
                                ул. Партизанская, 42<br />
                                (ТЦ «ИнструментМир», 2 этаж)
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Clock className="w-5 h-5 text-[#d25e2d]" />
                                Режим работы
                            </h3>
                            <p className="text-zinc-300">
                                Понедельник — Воскресенье:<br />
                                10:00 — 20:00
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-[#d25e2d]" />
                                Email
                            </h3>
                            <a
                                href="mailto:info@instryment.ru"
                                className="text-[#d25e2d] hover:text-[#ff8a5c] transition-colors text-lg"
                            >
                                info@instryment.ru
                            </a>
                        </div>
                    </div>

                    {/* Правая колонка — Дополнительно */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-xl font-semibold mb-6">Как с нами связаться</h2>
                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-11 h-11 rounded-2xl bg-[#252527] flex items-center justify-center flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <p className="font-medium">Телефон для консультаций</p>
                                        <p className=" text-[#d25e2d]">8 (913) 519-79-27</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-11 h-11 rounded-2xl bg-[#252527] flex items-center justify-center flex-shrink-0">
                                        ✉️
                                    </div>
                                    <div>
                                        <p className="font-medium">Электронная почта</p>
                                        <p className="text-[#d25e2d]">info@instryment.ru</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-11 h-11 rounded-2xl bg-[#252527] flex items-center justify-center flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <p className="font-medium">Физический адрес</p>
                                        <p className="text-zinc-400">Красноярск, ул. Партизанская, 42</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}