'use client';

export default function Form() {
    return (
        <form className='w-fit relative'>
            <input
                type='text'
                placeholder='Search for...'
                className='w-[36.75rem] h-[3.375rem] pl-[1.313rem] py-[1.125rem] border-[1px] border-stroke text-base/[1.188rem] focus:outline-primary rounded-md'
            />
            <button
                type='submit'
                className='pl-3 border-l border-stroke absolute top-[2px] bottom-[2px] right-3'
            >
                <img src='./icons/search.svg' alt='search' />
            </button>
        </form>
    );
}
