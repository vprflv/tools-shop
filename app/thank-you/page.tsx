import { Suspense } from 'react';
import ThankYouContent from "@/features/thank-you/ThankYouContent";

export default function ThankYouPage() {
    return (
        <Suspense fallback={<ThankYouLoading />}>
            <ThankYouContent />
        </Suspense>
    );
}

function ThankYouLoading() {
    return (
        <div className="min-h-screen bg-[#2e2e30] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-[#3a3a3d] border-t-[#d25e2d] rounded-full animate-spin" />
                <p className="text-zinc-400 text-lg">Загрузка...</p>
            </div>
        </div>
    );
}