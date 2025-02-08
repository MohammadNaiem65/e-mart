import Link from 'next/link';
import Categories from './Categories';
import Form from './Form';

export default function Banner() {
    return (
        <section className='mt-[2.063rem] flex justify-between items-center'>
            {/* Categories */}
            <Categories />

            <section className='w-[55.938rem]'>
                <div className='flex items-center justify-between'>
                    <Form />

                    <div className='flex items-center gap-x-2'>
                        <img src="./icons/telephone.svg" alt="call" />
                        <div>
                            <p className='text-[#808080] text-xs/[0.938rem]'>Call us now</p>
                            <p className='text-primary text-sm/[1.06rem] font-bold'>+880 1234-567890</p>
                        </div>
                    </div>

                    <Link href='/account' className='flex flex-col items-center justify-center gap-x-2'>
                        <img src="./icons/account_circle.svg" alt="account" />
                        <span className='text-primary text-xs/[0.938rem]'>Account</span>
                    </Link>
                </div>

                <img
                    src='./banner.png'
                    alt='banner'
                    className='w-[55.938rem] h-[27rem] mt-[1.188rem] rounded-md'
                />
            </section>
        </section>
    );
}
