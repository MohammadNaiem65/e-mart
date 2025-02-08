'use client';

import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import CategoryInput from './CategoryInput';

export default function Categories() {
    const [categories, setCategories] = useState([
        { name: 'Fashion & Apparel' },
        { name: 'Electronics' },
        { name: 'Home & Furniture' },
        { name: 'Beauty & Health' },
        { name: 'Books & Stationery' },
        { name: 'Toys & Games' },
        { name: 'Sports & Outdoors' },
        { name: 'Automotive' },
    ]);

    return (
        <section className='mt-3'>
            <CategoryInput />

            <div className='filter-options h-[17rem] flex flex-col gap-y-2 mt-4 overflow-y-auto'>
                {[...categories, ...categories]?.map((category, index) => (
                    <div key={index} className='flex items-center gap-x-3 relative'>
                        <input
                            id={index}
                            type='checkbox'
                            name={category?.name}
                            value={category?.name}
                            className='size-6 p-2 appearance-none peer border-2 rounded-lg checked:bg-primary checked:border-primary'
                        />
                        <IoMdCheckmark className='text-white text-lg hidden absolute left-3 top-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block' />

                        <label htmlFor={index}>{category?.name}</label>
                    </div>
                ))}
            </div>
        </section>
    );
}
