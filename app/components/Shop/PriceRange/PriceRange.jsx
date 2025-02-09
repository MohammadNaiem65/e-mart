import { IoIosArrowDown } from 'react-icons/io';
import { PriceRangeSlider } from './PriceRangeSlider';

export default function PriceRange() {
    return (
        <section className='w-full h-48 mt-4 px-5 py-2 border border-stroke rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Price Range</p>

                <IoIosArrowDown className='text-lg' />
            </div>

            <PriceRangeSlider min={0} max={100000} />
        </section>
    );
}
