import { IoSearchOutline } from 'react-icons/io5';

export default function BrandInput() {
    return (
        <form className='w-full my-4 text-gray-400 relative'>
            <input
                type='text'
                placeholder={'Search for...'}
                className='w-full h-8 pl-3 py-[1.125rem] pr-14 border border-stroke text-sm/[1.188rem] focus:outline-primary rounded-md'
            />

            <button
                type='submit'
                className='pl-3 absolute top-[2px] bottom-[2px] right-3'
            >
                <IoSearchOutline className='text-xl font-bold' />
            </button>
        </form>
    );
}