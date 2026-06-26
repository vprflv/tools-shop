'use client';

import Link from 'next/link';

export default function DeliveryPage() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">
            <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10 md:py-14">

                <Link
                    href="/"
                    className="text-[#d25e2d] hover:text-white mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                    ← На главную
                </Link>

                <h1 className="text-3xl sm:text-4xl font-bold mb-10">Доставка и оплата</h1>

                <div className="space-y-12 text-[16px] md:text-[17px] leading-relaxed">

                    {/* Доставка по Красноярску */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Доставка по Красноярску</h2>
                        <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-6 md:p-8">
                            <p className="text-emerald-400 font-semibold text-lg">
                                Бесплатная курьерская доставка
                            </p>
                            <p className="mt-3 text-zinc-300">
                                При любом заказе доставка по Красноярску — <span className="text-white font-medium">бесплатно</span>.
                            </p>
                        </div>
                    </div>

                    {/* Самовывоз */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Самовывоз</h2>
                        <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-6 md:p-8">
                            <p className="text-white">г. Красноярск, ул. Партизанская, 42</p>
                            <p className="text-zinc-400 mt-1">(ТЦ «ИнструментМир», 2 этаж)</p>
                            <p className="text-zinc-400 mt-4">Ежедневно с 10:00 до 20:00</p>
                        </div>
                    </div>

                    {/* Доставка по России */}
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Доставка по России</h2>
                        <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-6 md:p-8">
                            <p className="font-medium text-white mb-4">Транспортные компании:</p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-3 text-[15px] md:text-[16px]">
                                <div>• СДЭК</div>
                                <div>• Boxberry</div>
                                <div>• ПЭК</div>
                                <div>• Деловые Линии</div>
                                <div>• Энергия</div>
                                <div>• КИТ</div>
                            </div>

                            <p className="mt-8 text-zinc-400 text-[15px]">
                                Стоимость доставки рассчитывается автоматически при оформлении заказа
                                в зависимости от веса, объёма и выбранной транспортной компании.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}