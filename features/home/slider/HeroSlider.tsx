'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        image: '/slider/drills301.jpg',
        badge: 'Новинка!',
        title: 'Аккумуляторная дрель',
        highlight: 'для любых задач',
        price: '20 000 ₽',
        link: '/product/41',
    },
    {
        id: 2,
        image: '/slider/saw.jpg',
        badge: 'Максимальный эффект!',
        title: 'Ручная циркулярная пила',
        highlight: 'Точные и быстрые распилы',
        price: '17 000 ₽',
        link: '/product/43',
    },
    {
        id: 3,
        image: '/slider/toolsset.jpg',
        badge: 'Хит продаж',
        title: 'Набор ручного инструмента',
        highlight: 'в удобном кейсе',
        price: '6 800 ₽',
        link: '/product/42',
    },
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const current = slides[currentIndex];

    return (
        <section className="relative py-6 md:py-8 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative h-[450px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-[#3a3a3d]">

                    {/* Фоновое изображение */}
                    <Image
                        src={current.image}
                        alt={current.title}
                        fill
                        className="object-cover object-center"
                        priority
                    />

                    {/* Затемнение */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

                    {/* Контент */}
                    <div className="absolute inset-0 flex items-center justify-center px-6">
                        <div className="text-center space-y-6 max-w-lg">
                            <div className="inline-block bg-[#d25e2d] text-black text-sm font-bold px-6 py-2 rounded-full tracking-wide">
                                {current.badge}
                            </div>

                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black tracking-[-1.5px] leading-tight text-white">
                                {current.title}
                                <br />
                                <span className="text-[#d25e2d]">{current.highlight}</span>
                            </h1>

                            <p className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
                                {current.price}
                            </p>

                            <Link
                                href={current.link}
                                className="inline-block bg-[#d25e2d] hover:bg-[#c44a1c] text-black
                                           font-semibold text-lg px-10 py-4 rounded-2xl
                                           transition-all active:scale-95 shadow-lg
                                           hover:shadow-[0_0_20px_#d25e2d] hover:ring-2 hover:ring-[#d25e2d]/50"
                            >
                                Подробности
                            </Link>
                        </div>
                    </div>

                    {/* Индикаторы — теперь внутри слайда внизу */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-[#d25e2d] scale-125 shadow-[0_0_10px_#d25e2d]'
                                        : 'bg-white/40 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}