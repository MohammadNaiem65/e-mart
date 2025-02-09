'use client';

import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import BrandInput from './BrandInput';

export default function Brands() {
    const [brands, setBrands] = useState([
        { name: 'Bata' },
        { name: 'Samsung' },
        { name: 'KIAM' },
        { name: 'Oraimo' },
        { name: 'Walton' },
        { name: 'HP' },
        { name: 'Dell' },
        { name: 'Plilips' },
        { name: 'Nokia' },
        { name: 'Phoenix' },
        { name: 'Tecno' },
        { name: 'IPhone' },
        { name: 'Redmi' },
        { name: 'Realme' },
        { name: 'Oppo' },
        { name: 'Lenovo' },
        { name: 'Vivo' },
        { name: 'Xiaomi' },
        { name: 'Huawei' },
        { name: 'Motorola' },
        { name: 'Asus' },
    ]);

    return (
        <section className='mt-3'>
            <BrandInput />

            <div className='filter-options h-48 flex flex-col gap-y-2 mt-4 overflow-y-auto'>
                {[...brands, ...brands]?.map((category, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-x-3 relative'
                    >
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
