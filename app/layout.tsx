import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from 'sonner';
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
    title: 'ИнсTRYмент — Профессиональный инструмент с доставкой',
    description: 'Магазин электроинструмента, ручного инструмента, садовой техники и расходников. Качественный инструмент по честным ценам.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        title: 'ИнсTRYмент — Профессиональный инструмент',
        description: 'Широкий выбор инструмента для дома, стройки и мастерской.',
        images: [{ url: '/og-image.jpg' }],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <SessionProvider>
            <Providers>
                {children}
            </Providers>
                <Footer/>
            {/* Toaster должен быть на самом верхнем уровне */}
            <Toaster
                position="top-right"
                richColors
                closeButton
                theme="dark"
                duration={4000}
            />
        </SessionProvider>
        </body>
        </html>
    );
}