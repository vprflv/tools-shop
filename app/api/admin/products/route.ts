import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createServerSupabase } from '@/lib/supabase';
import { revalidateAllProducts } from '@/features/actions/productActions';

const BUCKET_NAME = 'product-images';

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData();

        const name = formData.get('name') as string;
        const article = (formData.get('article') as string)?.trim();
        const price = parseFloat(formData.get('price') as string);
        const oldPrice = formData.get('oldPrice') ? parseFloat(formData.get('oldPrice') as string) : null;
        const stock = parseInt(formData.get('stock') as string);
        const description = formData.get('description') as string || '';
        const categoryId = formData.get('categoryId') as string;
        const brandId = formData.get('brandId') as string;
        const specsJson = formData.get('specs') as string | null;

        const images = formData.getAll('images') as File[];

        if (!article) {
            return NextResponse.json({ error: 'Артикул обязателен' }, { status: 400 });
        }

        // === ПРОВЕРКА НА СУЩЕСТВОВАНИЕ АРТИКУЛА ===
        const existingProduct = await prisma.product.findUnique({
            where: { article },
            select: { id: true, name: true }
        });

        if (existingProduct) {
            return NextResponse.json({
                success: false,
                error: `Товар с артикулом "${article}" уже существует`,
                existingProductName: existingProduct.name
            }, { status: 409 }); // 409 Conflict
        }

        const imagePaths: string[] = [];
        const imageUrls: string[] = [];
        const supabase = await createServerSupabase();

        // Загрузка изображений
        for (const image of images) {
            const fileExt = image.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

            const { error: uploadError } = await supabase.storage
                .from(BUCKET_NAME)
                .upload(fileName, image, { cacheControl: '3600', upsert: false });

            if (uploadError) throw new Error(`Не удалось загрузить файл ${image.name}`);

            imagePaths.push(fileName);

            const { data: publicUrlData } = supabase.storage
                .from(BUCKET_NAME)
                .getPublicUrl(fileName);

            imageUrls.push(publicUrlData.publicUrl);
        }

        // Создание товара
        const product = await prisma.product.create({
            data: {
                name,
                article,
                price,
                oldPrice,
                stock,
                description,
                categoryId,
                brandId,
                images: imageUrls,
                imagePaths,
                specs: specsJson ? JSON.parse(specsJson) : {},
                features: [],
            },
        });

        await revalidateAllProducts();

        return NextResponse.json({
            success: true,
            product,
            message: 'Товар успешно создан'
        }, { status: 201 });

    } catch (error: any) {
        console.error('Create product error:', error);
        return NextResponse.json({
            success: false,
            error: error.message || 'Ошибка при создании товара'
        }, { status: 500 });
    }
}