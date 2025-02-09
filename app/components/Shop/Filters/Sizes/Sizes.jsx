import { IoIosArrowDown } from 'react-icons/io';
import SizeSelector from './SizeSelector';

export default function Sizes() {
    return (
        <section className='w-full h-[9rem] mt-4 px-5 py-2 border border-stroke rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Sizes</p>

                <IoIosArrowDown className='text-lg' />
            </div>

            <SizeSelector />
        </section>
    );
}
