import { IoIosArrowDown } from 'react-icons/io';
import Categories from './Categories';

export default function CategoriesSection() {
    return (
        <section className='w-full h-[25.125rem] mt-4 px-5 py-2 border border-stroke rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Categories</p>

                <IoIosArrowDown className='text-lg' />
            </div>

            <Categories />
        </section>
    );
}
