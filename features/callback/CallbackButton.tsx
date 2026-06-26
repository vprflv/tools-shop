'use client';

import { useState } from 'react';
import { Phone } from 'lucide-react';
import CallbackModal from './CallbackModal';

export default function CallbackButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 bg-[#d25e2d] hover:bg-[#c97a59]
                           text-black font-medium px-5 py-2.5 rounded-2xl
                           transition-all active:scale-95 whitespace-nowrap
                           hover:shadow-[0_0_15px_#d25e2d,0_0_10px_#d25e2d]
                           hover:ring-2 hover:ring-[#d25e2d]/50
                           shadow-sm"
            >
                {/*<Phone className="w-4 h-4" />*/}
                Перезвоните мне
            </button>

            <CallbackModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}