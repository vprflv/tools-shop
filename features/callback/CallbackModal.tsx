'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';

export default function CallbackModal({
                                          isOpen,
                                          onClose
                                      }: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        comment: '',
    });
    const [agreePolicy, setAgreePolicy] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreePolicy) {
            toast.error('Необходимо согласиться с политикой конфиденциальности');
            return;
        }

        setLoading(true);

        try {
            const res = await fetch('/api/callback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                toast.success('Заявка отправлена! Мы скоро перезвоним вам.', {
                    description: 'Обычно отвечаем в течение 10-15 минут'
                });
                onClose();
                setFormData({ name: '', phone: '', comment: '' });
                setAgreePolicy(false);
            } else {
                toast.error('Не удалось отправить заявку');
            }
        } catch {
            toast.error('Ошибка соединения. Попробуйте позже');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="bg-[#252527] border border-[#3a3a3d] rounded-3xl w-full max-w-md overflow-hidden">

                {/* Заголовок */}
                <div className="flex justify-between items-center px-6 py-5 border-b border-[#3a3a3d]">
                    <h2 className="text-2xl font-semibold text-[#d25e2d]">
                        Перезвоните мне
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <X className="w-6 h-6 hover:text-[#d25e2d]" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div>
                        <label className="text-sm text-zinc-400 mb-1.5 block select-none">Имя</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-4 py-3
                                        focus:outline-none
                                       focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]
                                       text-white placeholder:text-zinc-500 transition-all"
                            placeholder="Как к вам обращаться?"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-zinc-400 mb-1.5 block">Телефон</label>
                        <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-4 py-3
                                        focus:outline-none
                                       focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]
                                       text-white placeholder:text-zinc-500 transition-all"
                            placeholder="+7 (___) ___-__-__"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-zinc-400 mb-1.5 block">Комментарий (необязательно)</label>
                        <textarea
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            className="w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-4 py-3
                                       min-h-[100px]
                                       focus:outline-none
                                       focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]
                                       text-white placeholder:text-zinc-500 transition-all resize-y"
                            placeholder="Когда удобно перезвонить? Есть вопросы..."
                        />
                    </div>

                    {/* Чекбокс */}
                    <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={agreePolicy}
                                onChange={(e) => setAgreePolicy(e.target.checked)}
                                className="mt-1 w-5 h-5 accent-[#d25e2d] bg-[#1c1c1e] border-[#3a3a3d]"
                                required
                            />
                            <span className="text-sm text-zinc-400">
                                Я согласен с{' '}
                                <Link
                                    href="/policy/privacy"
                                    target="_blank"
                                    className="text-[#d25e2d] hover:text-[#ff8a5c] hover:underline transition-colors"
                                >
                                    политикой конфиденциальности
                                </Link>{' '}
                                и условиями обработки персональных данных
                            </span>
                        </label>
                    </div>

                    {/* Кнопка отправки */}
                    <button
                        type="submit"
                        disabled={loading || !agreePolicy}
                        className="w-full bg-[#d25e2d] hover:bg-[#c44a1c] disabled:opacity-70
                                   text-black font-semibold py-4 rounded-2xl transition-all
                                   active:scale-[0.98] text-lg shadow-md
                                   hover:shadow-[0_0_15px_#d25e2d] hover:ring-1 hover:ring-[#d25e2d]/50"
                    >
                        {loading ? 'Отправляем...' : 'Отправить заявку'}
                    </button>
                </form>
            </div>
        </div>
    );
}