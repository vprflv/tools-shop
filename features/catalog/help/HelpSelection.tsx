'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HelpSelection() {
    const helpItems = [
        {
            title: "Как безопасно работать с электроинструментом",
            image: "/help/safety.jpg",
            alt: "Безопасность",
            href: "/articles/safety",
        },
        {
            title: "Как выбрать аккумуляторный шуруповёрт?",
            image: "/help/choose-screwdriver.jpg",
            alt: "Выбор шуруповёрта",
            href: "/articles/how-to-choose-screwdriver",
        },
        {
            title: "10 инструментов, которые должны быть в каждом доме",
            image: "/help/tentools.jpg",
            alt: "10 инструментов",
            href: "/articles/ten-tools",
        },
    ];

    return (
        <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl p-6 lg:p-8">
            <h3 className="text-xl font-semibold mb-6 text-[#d25e2d]">
                Полезные гайды
            </h3>

            <div className="space-y-6">
                {helpItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="group block border-0 outline-none focus:outline-none"
                    >
                        <div className="relative h-40 bg-[#1c1c1e] rounded-2xl overflow-hidden
                                        border border-[#3a3a3d] group-hover:border-[#d25e2d]
                                        transition-all duration-300">
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                sizes="(max-width: 1024px) 280px, 320px"
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div className="pt-4 px-1">
                            <p className="font-medium leading-tight text-white group-hover:text-[#d25e2d] transition-colors">
                                {item.title}
                            </p>
                            <p className="text-[#d25e2d] text-sm mt-1 inline-flex items-center gap-1 group-hover:underline">
                                Читать статью →
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}