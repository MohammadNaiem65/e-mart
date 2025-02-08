import { IoSearchOutline } from 'react-icons/io5';

export default function InputForm({ placeholder }) {
    return (
        <form className='w-full relative'>
            <input
                type='text'
                placeholder={placeholder || 'Search for...'}
                className='w-full h-[3.375rem] pl-3 py-[1.125rem] pr-14 border border-stroke text-base/[1.188rem] focus:outline-primary rounded-md'
            />

            <button
                type='submit'
                className='pl-3 border-l border-stroke absolute top-[2px] bottom-[2px] right-3'
            >
                <IoSearchOutline className='text-xl font-bold' />
            </button>
        </form>
    );
}
