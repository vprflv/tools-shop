'use client';

import Link from 'next/link';
import { Hammer } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#252527] border-t border-[#3a3a3d] text-zinc-400">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">

                    {/* Логотип и описание */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 md:w-9 md:h-9 bg-[#d25e2d] rounded-xl flex items-center justify-center flex-shrink-0">
                                <Hammer className="w-4 h-4 md:w-5 md:h-5 text-black" />
                            </div>
                            <div>
                                <div className="font-bold text-xl md:text-2xl tracking-tight text-white">ИнсTRYмент</div>
                            </div>
                        </div>
                    </div>

                    {/* Навигация - Скрываем на мобильных */}
                    <div className="hidden md:block">
                        <h4 className="font-semibold text-white mb-4 text-base md:text-lg">Магазин</h4>
                        <div className="space-y-2.5 text-sm md:text-base">
                            <Link href="/catalog" className="block hover:text-white transition">Каталог товаров</Link>
                            <Link href="/about" className="block hover:text-white transition">О магазине</Link>
                            <Link href="/delivery" className="block hover:text-white transition">Доставка и оплата</Link>
                        </div>
                    </div>

                    {/* Блок "Поддержка" — скрыт на мобильных */}
                    <div className="hidden md:block">
                        <h4 className="font-semibold text-white mb-4 text-base md:text-lg">
                            Поддержка
                        </h4>
                        <div className="space-y-2.5 text-sm md:text-base">
                            <Link
                                href="/contacts"
                                className="block hover:text-white transition-colors"
                            >
                                Контакты
                            </Link>
                            <Link
                                href="/policy/privacy"
                                className="block hover:text-white transition-colors"
                            >
                                Политика конфиденциальности
                            </Link>
                        </div>
                    </div>

                    {/* Контакты */}
                    <div>
                        <h4 className="font-semibold text-white mb-4 text-base md:text-lg">Контакты</h4>
                        <div className="space-y-3 text-sm md:text-base">
                            <p>
                                <span className="block text-white text-base md:text-lg">8 (913) 519-79-27</span>
                                Ежедневно с 9:00 до 21:00
                            </p>
                            <p>
                                г. Красноярск,<br />
                                ул. Партизанская, 42
                            </p>
                            <p>
                                <a href="mailto:info@instryment.ru" className="hover:text-white transition">
                                    info@instryment.ru
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Нижняя строка */}
                <div className="border-t border-[#3a3a3d] mt-12 md:mt-16 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p>© 2026 ИнсTRYмент. Все права защищены.</p>
                    <p className="text-zinc-500">Интернет-магазин профессионального инструмента</p>
                </div>
            </div>
        </footer>
    );
}