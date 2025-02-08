import { IoIosArrowDown } from 'react-icons/io';
import Options from './Options';

export default function Availability() {
    return (
        <section className='w-full h-[7.8rem] mt-4 px-5 py-2 border border-stroke rounded-lg'>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-lg'>Availability</p>

                <IoIosArrowDown className='text-lg' />
            </div>

            <Options />
        </section>
    );
}
