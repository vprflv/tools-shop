import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        const { name, phone, comment } = data;

        // Здесь можно добавить валидацию
        if (!name || !phone) {
            return NextResponse.json(
                { error: 'Имя и телефон обязательны' },
                { status: 400 }
            );
        }

        // === Здесь обработка заявки ===
        // Примеры:
        // 1. Сохранить в базу (Prisma, Drizzle и т.д.)
        // 2. Отправить на Telegram / Email / amoCRM / Bitrix и т.д.

        console.log('Новая заявка на перезвон:', { name, phone, comment });

        // Заглушка — просто успех
        return NextResponse.json({
            success: true,
            message: 'Заявка принята'
        });

    } catch (error) {
        console.error('Ошибка при обработке callback:', error);
        return NextResponse.json(
            { error: 'Внутренняя ошибка сервера' },
            { status: 500 }
        );
    }
}