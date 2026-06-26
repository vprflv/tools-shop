// components/ui/Logo.tsx
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
    href?: string;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({
                                 href = "/",
                                 className = "",
                                 size = 'md'
                             }: LogoProps) {

    const sizes = {
        sm: { img: "h-14", text: "text-lg" },
        md: { img: "h-16", text: "text-xl" },
        lg: { img: "h-20", text: "text-2xl" },
        xl: { img: "h-24", text: "text-3xl" },
    }[size];

    return (
        <Link
            href={href}
            className={`flex items-center gap-4 group ${className}`}
        >
            {/* Картинка */}
            <Image
                src="/logo.png"
                alt="ИнсTRYмент"
                width={260}
                height={260}
                className={`${sizes.img} w-auto object-contain drop-shadow-[0_0_8px_#d25e2d] scale-120 transition-transform`}
                priority
            />

            {/* Текст */}
            <div className="flex flex-col">
                <div className={`${sizes.text} mt-2 font-black tracking-[-1.5px] text-white leading-none  transition-colors`}>
                    ИНС
                    <span className="text-[#d25e2d] group-hover:text-[#ff8a5c]
                                    group-hover:drop-shadow-[0_0_12px_#ff8a5c]
                                   transition-all duration-300">
                        TRY
                    </span>
                    МЕНТ
                </div>
                <div className="text-[10px] text-zinc-500 font-medium tracking-widest uppercase mt-0.5">
                    ПРОФЕССИОНАЛЬНЫЙ ИНСТРУМЕНТ
                </div>
            </div>
        </Link>
    );
}