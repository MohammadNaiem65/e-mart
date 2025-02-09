'use client';

import { IoIosArrowDown } from 'react-icons/io';
import Brands from './Brands';

export default function BrandsSection() {
    return (
        <section className='w-full h-80 mt-4 px-5 py-2 border border-stroke rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Brands</p>

                <IoIosArrowDown className='text-lg' />
            </div>

            <Brands />
        </section>
    );
}
