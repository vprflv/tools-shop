'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Save } from 'lucide-react';

import { useCategories } from "@/features/admin/products/new/hooks/useCategories";
import { useBrands } from "@/features/admin/products/new/hooks/useBrands";
import { useSpecs } from "@/features/admin/products/new/hooks/useSpecs";
import { toast } from 'sonner';

import SpecsSelector from "@/features/admin/products/new/components/ProductForm/specs/SpecsSelector";
import ProductImageUpload from "@/features/admin/products/new/components/images/ProductImageUpload";
import CategorySelector from "@/features/admin/products/new/components/ProductForm/category/CategorySelector";
import BrandSelector from "@/features/admin/products/new/components/ProductForm/brands/BrandSelector";

import CategoryModal from "@/features/admin/products/new/components/ProductForm/category/CategoryModal";
import BrandModal from "@/features/admin/products/new/components/ProductForm/brands/BrandModal";
import SpecsModal from "@/features/admin/products/new/components/ProductForm/specs/SpecsModal";
import DeleteCategoryModal from "@/features/admin/products/new/components/ProductForm/category/DeleteCategoryModal";
import DeleteBrandModal from "@/features/admin/products/new/components/ProductForm/brands/DeleteBrandModal";

import { revalidateAllProducts } from "@/features/actions/productActions";
import BasicProductFields from "@/features/admin/products/components/fields/BasicProductFields";
import { ProductFormData, productSchema } from "@/features/admin/types/products-form";

export default function ProductForm() {
    const [images, setImages] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { categories, addCategory, refetch: refetchCategories } = useCategories();
    const { brands, addBrand, refetch: refetchBrands } = useBrands();
    const { specs, updateSpecs } = useSpecs();

    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showBrandModal, setShowBrandModal] = useState(false);
    const [showSpecsModal, setShowSpecsModal] = useState(false);
    const [showDeleteCategoryModal, setShowDeleteCategoryModal] = useState(false);
    const [showDeleteBrandModal, setShowDeleteBrandModal] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ProductFormData>({
        resolver: zodResolver(productSchema),
        defaultValues: { stock: '0', price: '0', oldPrice: '' },
    });

    const onSubmit = async (data: ProductFormData) => {
        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('article', data.article);
        formData.append('price', data.price);
        if (data.oldPrice) formData.append('oldPrice', data.oldPrice);
        formData.append('stock', data.stock);
        formData.append('description', data.description);
        formData.append('categoryId', data.categoryId);
        formData.append('brandId', data.brandId);

        if (specs.length > 0) {
            const specsObj = specs.reduce((acc, item) => {
                acc[item.key] = item.value;
                return acc;
            }, {} as Record<string, string>);
            formData.append('specs', JSON.stringify(specsObj));
        }

        images.forEach(file => formData.append('images', file));

        try {
            const res = await fetch('/api/admin/products', {
                method: 'POST',
                body: formData
            });

            const responseData = await res.json();

            if (res.ok && responseData.success) {
                await revalidateAllProducts();
                toast.success('✅ Товар успешно создан!', {
                    description: `${data.name} добавлен в каталог`,
                });
                window.location.href = '/admin/products';
            } else {
                // ← Здесь обрабатываем конкретные ошибки
                if (responseData.error?.includes('уже существует') || res.status === 409) {
                    toast.error('Товар с таким артикулом уже существует', {
                        description: responseData.existingProductName
                            ? `Существующий товар: ${responseData.existingProductName}`
                            : undefined
                    });
                } else {
                    toast.error('Ошибка при создании товара', {
                        description: responseData.error || 'Неизвестная ошибка'
                    });
                }
            }
        } catch (err: any) {
            toast.error('Ошибка соединения', {
                description: 'Проверьте интернет-соединение'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <BasicProductFields register={register} errors={errors} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CategorySelector
                    categories={categories}
                    register={register}
                    setValue={setValue}
                    onAddNew={() => setShowCategoryModal(true)}
                    onDeleteClick={() => setShowDeleteCategoryModal(true)}
                />

                <BrandSelector
                    brands={brands}
                    register={register}
                    setValue={setValue}
                    onAddNew={() => setShowBrandModal(true)}
                    onDeleteClick={() => setShowDeleteBrandModal(true)}
                />
            </div>

            <SpecsSelector specs={specs} onUpdate={updateSpecs} />

            <div>
                <label className="block text-sm mb-2 font-medium text-zinc-300">Описание товара</label>
                <textarea
                    {...register('description')}
                    rows={6}
                    className="w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-5 py-4
                               text-white placeholder:text-zinc-500 focus:border-[#d25e2d]
                               focus:ring-1 focus:ring-[#d25e2d]/30 transition resize-y min-h-[140px]"
                    placeholder="Подробное описание товара..."
                />
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1.5">{errors.description.message}</p>
                )}
            </div>

            <ProductImageUpload
                images={images}
                previews={previews}
                onImagesChange={setImages}
                onPreviewsChange={setPreviews}
            />

            {/* Кнопка создания */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-8 bg-[#d25e2d] hover:bg-[#c44a1c] disabled:bg-[#3a3a3d]
                           disabled:text-zinc-400 text-black font-semibold py-4 rounded-3xl
                           flex items-center justify-center gap-3 text-lg transition-all active:scale-[0.98]"
            >
                <Save className="w-5 h-5" />
                {isLoading ? 'Создаём товар...' : 'Создать товар'}
            </button>

            {/* Модалки */}
            <CategoryModal isOpen={showCategoryModal} onClose={() => setShowCategoryModal(false)} onSuccess={addCategory} />
            <DeleteCategoryModal isOpen={showDeleteCategoryModal} onClose={() => setShowDeleteCategoryModal(false)} categories={categories} onDeleted={refetchCategories} />
            <BrandModal isOpen={showBrandModal} onClose={() => setShowBrandModal(false)} onSuccess={addBrand} />
            <DeleteBrandModal isOpen={showDeleteBrandModal} onClose={() => setShowDeleteBrandModal(false)} brands={brands} onDeleted={refetchBrands} />
            <SpecsModal isOpen={showSpecsModal} onClose={() => setShowSpecsModal(false)} specs={specs} onSave={updateSpecs} />
        </form>
    );
}