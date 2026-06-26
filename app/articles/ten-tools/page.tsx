'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ToolsArticle() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">
            {/* Шапка */}
            <div className="border-b border-[#3a3a3d] bg-[#252527]">
                <div className="max-w-3xl mx-auto px-6 py-12">
                    <Link
                        href="/"
                        className="text-[#d25e2d] hover:text-white mb-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                        ← Назад в каталог
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                        10 инструментов, которые должны быть в каждом доме в 2026 году
                    </h1>
                    <p className="text-zinc-400 mt-4 text-lg">
                        Без чего не обойтись современному мастеру
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 pt-12">
                <div className="prose prose-invert prose-zinc max-w-none prose-p:text-[17.5px] leading-relaxed">

                    <p className="text-lg text-zinc-300">
                        В 2026 году хороший набор инструментов — это уже не роскошь, а необходимость.
                        С ним вы сможете быстро решить большинство бытовых задач и сэкономить на вызове мастеров.
                    </p>

                    {/* Большое фото */}
                    <div className="my-12 rounded-3xl overflow-hidden border border-[#3a3a3d] shadow-2xl">
                        <Image
                            src="/articles/tools.jpg"
                            alt="Набор профессиональных инструментов"
                            width={1200}
                            height={675}
                            className="w-full object-cover"
                        />
                    </div>

                    {/* ТОП-10 таблица */}
                    <div className="my-12 overflow-x-auto">
                        <table className="w-full border-collapse border border-[#3a3a3d] rounded-2xl overflow-hidden text-sm">
                            <thead className="bg-[#252527]">
                            <tr>
                                <th className="p-4 text-left w-8">#</th>
                                <th className="p-4 text-left">Инструмент</th>
                                <th className="p-4 text-left">Зачем нужен</th>
                                <th className="p-4 text-left">Цена (примерно)</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-[#3a3a3d]">
                            <tr>
                                <td className="p-4 font-mono text-[#d25e2d]">1</td>
                                <td className="p-4 font-semibold">Аккумуляторный шуруповёрт</td>
                                <td className="p-4 text-zinc-400">90% всех бытовых задач</td>
                                <td className="p-4">4 500 – 12 000 ₽</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-mono text-[#d25e2d]">2</td>
                                <td className="p-4 font-semibold">Перфоратор SDS-Plus</td>
                                <td className="p-4 text-zinc-400">Работа с бетоном и кирпичом</td>
                                <td className="p-4">7 000 – 18 000 ₽</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-mono text-[#d25e2d]">3</td>
                                <td className="p-4 font-semibold">Болгарка 125 мм</td>
                                <td className="p-4 text-zinc-400">Резка, шлифовка, зачистка</td>
                                <td className="p-4">3 500 – 8 000 ₽</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-mono text-[#d25e2d]">4</td>
                                <td className="p-4 font-semibold">Набор отвёрток + биты</td>
                                <td className="p-4 text-zinc-400">Мелкий ремонт и сборка</td>
                                <td className="p-4">1 200 – 3 500 ₽</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-mono text-[#d25e2d]">5</td>
                                <td className="p-4 font-semibold">Лазерный уровень</td>
                                <td className="p-4 text-zinc-400">Ровные полки, картины, плитка</td>
                                <td className="p-4">2 500 – 7 000 ₽</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-3xl font-bold mt-16 mb-6">Топ-5 самых полезных инструментов</h2>

                    <h3 className="text-2xl font-semibold mt-12 mb-4">1. Аккумуляторный шуруповёрт (ударный)</h3>
                    <p>
                        Самый востребованный инструмент в доме. Выбирайте модель 18V с двумя аккумуляторами и ёмкостью от 2 Ач.
                    </p>

                    <h3 className="text-2xl font-semibold mt-12 mb-4">2. Перфоратор SDS-Plus</h3>
                    <p>
                        Без него невозможно повесить телевизор, карниз или сделать отверстие в бетоне.
                        Берите с мощностью от 800 Вт.
                    </p>

                    <h3 className="text-2xl font-semibold mt-12 mb-4">3. Угловая шлифмашина (болгарка) 125 мм</h3>
                    <p>
                        Универсальный инструмент: режет металл, плитку, бетон и зачищает поверхности.
                    </p>

                    <h3 className="text-2xl font-semibold mt-12 mb-4">4. Лазерный уровень</h3>
                    <p>
                        Спасает от кривых полок, картин и переделок. Обязательная вещь для ремонта.
                    </p>

                    <h3 className="text-2xl font-semibold mt-12 mb-4">5. Качественный набор ключей и бит</h3>
                    <p>
                        Основной набор для мелкого ремонта, сборки мебели и работы с техникой.
                    </p>

                    {/* Вывод */}
                    <div className="mt-20 p-10 bg-[#252527] border border-[#d25e2d]/30 rounded-3xl">
                        <p className="text-2xl font-semibold text-[#d25e2d] mb-4">
                            Главный совет 2026 года:
                        </p>
                        <p className="text-lg">
                            Лучше купить <span className="font-semibold text-white">5 хороших инструментов</span>,
                            чем 20 дешёвых. Один раз вложитесь в надёжный бренд (Bosch, Makita, DeWalt, Metabo, Интерскол) — и будете пользоваться годами.
                        </p>
                    </div>

                    <div className="mt-16 text-center">
                        <Link
                            href="/catalog"
                            className="inline-block bg-[#d25e2d] hover:bg-[#c44a1c] text-black font-semibold px-10 py-4 rounded-2xl transition text-lg"
                        >
                            Перейти в каталог инструментов →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}