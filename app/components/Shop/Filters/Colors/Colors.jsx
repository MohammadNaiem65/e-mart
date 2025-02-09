import { IoIosArrowDown, IoMdCheckmark } from 'react-icons/io';
import ColorSelector from './ColorSelector';

export default function Colors() {
    return (
        <section className='w-full h-[8rem] mt-4 px-5 py-2 border border-stroke rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Colors</p>

                <IoIosArrowDown className='text-lg' />
            </div>

            <ColorSelector />
        </section>
    );
}
