import { SlEnvolopeLetter } from 'react-icons/sl';

export default function Newsletter() {
    return (
        <section className='h-24 mt-20 p-[1.25rem] border border-primary flex justify-between items-center rounded-full'>
            <div className='w-1/2 pl-2 flex items-center gap-x-[0.875rem]'>
                <SlEnvolopeLetter className='text-[2.5rem] text-[#D9D9D9]' />

                <div>
                    <p className='text-xl font-bold'>
                        Special Deals Delivered to You!
                    </p>
                    <small className='-mt-2 text-stroke'>
                        Never miss an update on events, savings, and exclusive
                        promotions
                    </small>
                </div>
            </div>

            <form className='w-1/2 h-[3.625rem] relative'>
                <input
                    type='email'
                    placeholder='Enter your E-mail here'
                    className='pl-[2.25rem] py-[1.125rem] pr-[9.5rem] border border-stroke absolute inset-0 rounded-full focus:outline-none focus:border-primary z-10'
                />
                <button
                    type='submit'
                    className='w-[8.375rem]  text-white bg-primary absolute top-0 right-0 bottom-0 z-20 rounded-tr-full rounded-br-full'
                >
                    SIGN UP
                </button>
            </form>
        </section>
    );
}
