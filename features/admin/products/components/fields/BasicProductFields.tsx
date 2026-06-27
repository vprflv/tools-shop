'use client';

import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ProductFormData } from "@/features/admin/types/products-form";

type BasicProductFieldsProps = {
    register: UseFormRegister<ProductFormData>;
    errors: FieldErrors<ProductFormData>;
};

export default function BasicProductFields({ register, errors }: BasicProductFieldsProps) {
    const inputClass = "w-full bg-[#1c1c1e] border border-[#3a3a3d] rounded-2xl px-5 py-4 text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#d25e2d] focus:ring-1 focus:ring-[#d25e2d]/30 transition";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {/* Артикул */}
            <div>
                <label className="block text-sm mb-2 font-medium text-zinc-300">
                    Артикул <span className="md:hidden text-xs text-zinc-500">(код)</span>
                </label>
                <input
                    {...register('article')}
                    className={inputClass}
                    placeholder="POL-1102"
                />
                {errors.article && <p className="text-red-500 text-sm mt-1.5">{errors.article.message}</p>}
            </div>

            {/* Название */}
            <div>
                <label className="block text-sm mb-2 font-medium text-zinc-300">
                    Название <span className="md:hidden text-xs text-zinc-500">товара</span>
                </label>
                <input
                    {...register('name')}
                    className={inputClass}
                    placeholder="Аккумуляторный шуруповёрт Bosch"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1.5">{errors.name.message}</p>}
            </div>

            {/* Цена */}
            <div>
                <label className="block text-sm mb-2 font-medium text-zinc-300">Цена (₽)</label>
                <input
                    type="text"
                    {...register('price')}
                    className={inputClass}
                    placeholder="4990"
                />
                {errors.price && <p className="text-red-500 text-sm mt-1.5">{errors.price.message}</p>}
            </div>

            {/* Старая цена */}
            <div>
                <label className="block text-sm mb-2 font-medium text-zinc-300">
                    Старая цена <span className="md:hidden text-xs text-zinc-500">(опц.)</span>
                </label>
                <input
                    type="text"
                    {...register('oldPrice')}
                    className={inputClass}
                    placeholder="5990"
                />
            </div>

            {/* Остаток */}
            <div>
                <label className="block text-sm mb-2 font-medium text-zinc-300">
                    Остаток <span className="md:hidden text-xs text-zinc-500">на складе</span>
                </label>
                <input
                    type="text"
                    {...register('stock')}
                    className={inputClass}
                    placeholder="15"
                />
                {errors.stock && <p className="text-red-500 text-sm mt-1.5">{errors.stock.message}</p>}
            </div>
        </div>
    );
}