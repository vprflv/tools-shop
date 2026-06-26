'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HowToChooseScrewdriver() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">
            <div className="border-b border-[#3a3a3d] bg-[#252527]">
                <div className="max-w-3xl mx-auto px-6 py-12">
                    <Link
                        href="/"
                        className="text-[#d25e2d] hover:text-white mb-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                        ← Назад в каталог
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Как выбрать аккумуляторный шуруповёрт в 2026 году?
                    </h1>
                    <p className="text-zinc-400 mt-4 text-lg">
                        Полное руководство: от задач до конкретных моделей
                    </p>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-6 pt-10">
                <div className="prose prose-invert prose-zinc max-w-none prose-p:text-[17.5px] leading-relaxed">

                    <p>
                        Шуруповёрт — это самый используемый инструмент в доме и на объекте.
                        Прежде чем покупать, важно понять — <strong>для каких задач</strong> он вам нужен.
                        От этого зависит и мощность, и тип аккумулятора, и цена.
                    </p>

                    <div className="my-10">
                        <div className="relative aspect-[16/9] max-h-[340px] rounded-3xl overflow-hidden shadow-xl mx-auto border border-[#3a3a3d]">
                            <Image
                                src="/articles/handscrews.jpg"
                                alt="Разные аккумуляторные шуруповёрты"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">1. Для дома и мелкого ремонта</h2>
                    <p>
                        Если вы собираете мебель, вешаете полки, работаете с гипсокартоном и периодически что-то ремонтируете —
                        вам хватит <strong>бытового шуруповёрта 12–18V</strong>.
                        Такие модели лёгкие, компактные и стоят разумных денег.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">2. Для профессиональной работы и стройки</h2>
                    <p>
                        Если вы часто работаете с твёрдым деревом, металлом или занимаетесь отделкой —
                        выбирайте <strong>профессиональный инструмент 18V с ударным механизмом</strong>.
                        Он мощнее, надёжнее и лучше переносит длительные нагрузки.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">3. Основные характеристики, на которые стоит смотреть</h2>

                    <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#252527] p-6 rounded-3xl border border-[#3a3a3d]">
                            <h3 className="text-[#d25e2d] font-semibold mb-2">Напряжение аккумулятора</h3>
                            <p className="text-zinc-400">12V — для лёгких задач<br />18V — оптимальный выбор для большинства пользователей</p>
                        </div>
                        <div className="bg-[#252527] p-6 rounded-3xl border border-[#3a3a3d]">
                            <h3 className="text-[#d25e2d] font-semibold mb-2">Крутящий момент</h3>
                            <p className="text-zinc-400">30–40 Нм — для дома<br />60+ Нм — для профессиональной работы</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">Рекомендации 2026 года</h2>
                    <ul className="list-disc pl-6 space-y-4 text-[17.5px]">
                        <li><strong>Для дома:</strong> Makita DF333D, Bosch GSR 12V-35, Интерскол ДА-12ЭР</li>
                        <li><strong>Универсальный вариант:</strong> Makita DHP485 или DeWalt DCD805</li>
                        <li><strong>Профессиональный уровень:</strong> Makita DHP486, Bosch GSR 18V-55</li>
                    </ul>

                    {/* Блок с призывом */}
                    <div className="mt-20 p-10 bg-[#252527] border border-[#d25e2d]/30 rounded-3xl text-center">
                        <h3 className="text-2xl font-semibold mb-4">
                            Не уверены, какой шуруповёрт выбрать?
                        </h3>
                        <p className="text-zinc-400 mb-8">
                            Напишите нам или позвоните — поможем подобрать модель именно под ваши задачи.
                        </p>
                        <Link
                            href="/catalog"
                            className="inline-block bg-[#d25e2d] hover:bg-[#c44a1c] text-black font-semibold px-10 py-4 rounded-2xl transition text-lg"
                        >
                            Перейти в каталог шуруповёртов
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}