'use client';

export default function ProductDetailSkeleton() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10 bg-[#2e2e30]">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                {/* Левая колонка — изображения */}
                <div className="lg:w-1/2">
                    {/* Основное большое фото */}
                    <div className="aspect-square bg-[#1c1c1e] rounded-3xl animate-pulse border border-[#3a3a3d]" />

                    {/* Миниатюры */}
                    <div className="flex gap-4 mt-6">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 bg-[#1c1c1e] rounded-2xl animate-pulse border border-[#3a3a3d] flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>

                {/* Правая колонка — информация */}
                <div className="lg:w-1/2 space-y-8">

                    {/* Бренд + Категория */}
                    <div className="flex gap-3">
                        <div className="h-6 w-28 bg-[#252527] rounded animate-pulse" />
                        <div className="h-6 w-36 bg-[#252527] rounded animate-pulse" />
                    </div>

                    {/* Название товара */}
                    <div className="h-11 bg-[#252527] rounded-2xl w-4/5 animate-pulse" />

                    {/* Цена */}
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-44 bg-[#252527] rounded-2xl animate-pulse" />
                        <div className="h-8 w-32 bg-[#252527] rounded animate-pulse" />
                    </div>

                    {/* Характеристики */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className="h-10 bg-[#252527] rounded-2xl animate-pulse border border-[#3a3a3d]"
                            />
                        ))}
                    </div>

                    {/* Описание */}
                    <div className="space-y-3">
                        <div className="h-4 bg-[#252527] rounded w-full animate-pulse" />
                        <div className="h-4 bg-[#252527] rounded w-11/12 animate-pulse" />
                        <div className="h-4 bg-[#252527] rounded w-4/5 animate-pulse" />
                        <div className="h-4 bg-[#252527] rounded w-10/12 animate-pulse" />
                    </div>

                    {/* Кнопка "В корзину" */}
                    <div className="h-14 bg-[#252527] rounded-3xl animate-pulse mt-10" />
                </div>
            </div>
        </div>
    );
}