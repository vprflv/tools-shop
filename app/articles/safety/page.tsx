'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SafetyArticle() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">
            {/* Шапка */}
            <div className="border-b border-[#3a3a3d] bg-[#252527]">
                <div className="max-w-3xl mx-auto px-6 py-12">
                    <Link
                        href="/catalog"
                        className="text-[#d25e2d] hover:text-white mb-6 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                        ← Назад в каталог
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Как безопасно работать с электроинструментом
                    </h1>
                    <p className="text-zinc-400 mt-4 text-lg">
                        Правила, которые помогут избежать травм и продлить жизнь вашего инструмента
                    </p>
                </div>
            </div>

            {/* Основной контент */}
            <div className="max-w-3xl mx-auto px-6 pt-10">
                <div className="prose prose-invert prose-zinc max-w-none prose-p:text-[17.5px] leading-relaxed">

                    <p>
                        Электроинструмент значительно ускоряет работу, но при неправильном использовании может стать причиной серьёзных травм.
                        Вот основные правила безопасности, которые должен знать каждый мастер.
                    </p>

                    <div className="my-10">
                        <div className="relative aspect-[16/9] max-h-[340px] rounded-3xl overflow-hidden shadow-xl mx-auto border border-[#3a3a3d]">
                            <Image
                                src="/articles/safety-work.jpg"
                                alt="Безопасная работа с электроинструментом"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">1. Средства индивидуальной защиты</h2>
                    <p>
                        Никогда не работайте без защиты. Обязательно используйте:
                    </p>
                    <ul className="list-disc pl-6 space-y-3 text-zinc-200">
                        <li><strong>Защитные очки или щиток</strong> — защита от искр, стружки и осколков</li>
                        <li><strong>Наушники или беруши</strong> — болгарка и перфоратор очень громкие</li>
                        <li><strong>Перчатки</strong> — особенно при работе с металлом и болгаркой</li>
                        <li><strong>Респиратор</strong> — при шлифовке, резке бетона и дерева</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">2. Основные правила работы</h2>
                    <ul className="list-disc pl-6 space-y-4 text-zinc-200">
                        <li>Всегда проверяйте надёжность крепления диска/сверла перед включением</li>
                        <li>Не работайте в мокрой одежде и мокрыми руками</li>
                        <li>Держите инструмент двумя руками (особенно болгарку)</li>
                        <li>Не перегружайте инструмент — если он сильно греется, дайте остыть</li>
                        <li>Отключайте инструмент от сети перед заменой оснастки</li>
                    </ul>

                    <div className="my-10">
                        <div className="relative aspect-[16/9] max-h-[320px] rounded-3xl overflow-hidden shadow-xl mx-auto border border-[#3a3a3d]">
                            <Image
                                src="/articles/safety-tools.jpg"
                                alt="Правильная работа с болгаркой"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold mt-12 mb-6">3. Самые опасные ситуации</h2>
                    <p>
                        <strong>Заклинивание диска болгарки</strong> — одна из самых частых причин травм.
                        Всегда работайте так, чтобы искры летели от вас, а не на вас.
                    </p>
                    <p>
                        <strong>Отдача перфоратора</strong> — держите инструмент крепко и используйте дополнительную рукоятку.
                    </p>

                    {/* Важное предупреждение */}
                    <div className="mt-16 p-8 bg-red-500/10 border border-red-500/30 rounded-3xl">
                        <p className="text-red-400 font-medium flex items-start gap-3">
                            <span className="text-3xl">⚠️</span>
                            <span>
                                Никогда не снимайте защитный кожух с болгарки.<br />
                                Не работайте с повреждённым диском.
                            </span>
                        </p>
                    </div>

                    <div className="mt-20 text-center">
                        <p className="text-xl text-zinc-400 mb-6">
                            Соблюдайте эти правила — и инструмент будет служить вам долгие годы.
                        </p>
                        <Link
                            href="/catalog"
                            className="inline-block bg-[#d25e2d] hover:bg-[#c44a1c] text-black font-semibold px-10 py-4 rounded-2xl transition text-lg"
                        >
                            Перейти в каталог инструментов
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}