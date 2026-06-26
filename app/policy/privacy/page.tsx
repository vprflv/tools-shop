'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#2e2e30] text-white pb-20">
            <div className="max-w-3xl mx-auto px-5 sm:px-6 py-10 md:py-16">

                <Link
                    href="/"
                    className="text-[#d25e2d] hover:text-white mb-10 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                >
                    ← На главную
                </Link>

                <h1 className="text-4xl md:text-5xl font-bold mb-10">
                    Политика конфиденциальности
                </h1>

                <p className="text-zinc-400 mb-12">
                    Последняя редакция: 25 июня 2026 года
                </p>

                <div className="prose prose-invert prose-zinc max-w-none text-[17px] md:text-[17.5px] leading-relaxed">

                    <h2 className="text-2xl font-semibold mt-12 mb-4">1. Общие положения</h2>
                    <p>
                        Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональной информации
                        пользователей сайта ИнсTRYмент (далее — Сайт).
                    </p>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">2. Какие данные мы собираем</h2>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Фамилия, имя и отчество</li>
                        <li>Номер телефона</li>
                        <li>Адрес электронной почты</li>
                        <li>Адрес доставки</li>
                        <li>Данные о заказах</li>
                        <li>Техническая информация (IP-адрес, тип устройства, браузер, cookies)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">3. Цели обработки данных</h2>
                    <p>Мы используем ваши данные исключительно для:</p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Обработки и доставки ваших заказов</li>
                        <li>Уведомлений о статусе заказа</li>
                        <li>Ответов на ваши обращения</li>
                        <li>Улучшения работы сайта и сервиса</li>
                        <li>Выполнения требований законодательства РФ</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">4. Cookies и аналогичные технологии</h2>
                    <p>
                        Сайт использует cookies для повышения удобства пользования. Вы можете отключить cookies в настройках браузера.
                        Однако это может повлиять на работу некоторых функций сайта.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">5. Передача данных третьим лицам</h2>
                    <p>
                        Мы не продаём и не передаём ваши персональные данные третьим лицам для маркетинговых целей.
                        Передача возможна только:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Службам доставки (для выполнения заказа)</li>
                        <li>Платёжным системам (для обработки оплаты)</li>
                        <li>По требованию государственных органов в соответствии с законодательством РФ</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">6. Ваши права</h2>
                    <p>Вы имеете право:</p>
                    <ul className="list-disc pl-6 space-y-3">
                        <li>Получить информацию о своих персональных данных</li>
                        <li>Потребовать исправления или удаления данных</li>
                        <li>Отозвать согласие на обработку данных</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">7. Безопасность данных</h2>
                    <p>
                        Мы принимаем все необходимые технические и организационные меры для защиты ваших данных
                        от несанкционированного доступа, изменения, раскрытия или уничтожения.
                    </p>

                    <h2 className="text-2xl font-semibold mt-12 mb-4">8. Изменения в Политике</h2>
                    <p>
                        Мы можем обновлять данную Политику. Актуальная версия всегда доступна на этой странице.
                        Продолжая использовать Сайт после изменений, вы соглашаетесь с новой редакцией.
                    </p>

                    {/* Контактный блок */}
                    <div className="mt-16 p-8 bg-[#252527] border border-[#3a3a3d] rounded-3xl">
                        <p className="font-medium">По всем вопросам, связанным с обработкой персональных данных, вы можете обращаться по адресу:</p>
                        <a
                            href="mailto:info@instryment.ru"
                            className="text-[#d25e2d] hover:text-[#ff8a5c] transition-colors block mt-3 text-lg"
                        >
                            info@instryment.ru
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}