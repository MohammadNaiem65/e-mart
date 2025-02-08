import Image from 'next/image';
import Link from 'next/link';
import { GoHome } from 'react-icons/go';
import { MdOutlineCall, MdOutlineEmail } from 'react-icons/md';

export default function CompanyDetails() {
    return (
        <section>
            <Link href='/'>
                <Image
                    src='/logo-dark.png'
                    alt='logo'
                    width={149}
                    height={53}
                    priority
                />
            </Link>

            <div className='mt-8'>
                <p className='flex items-center justify-start gap-x-2'>
                    <MdOutlineCall className='text-2xl' />
                    <span className='text-white/70 max-w-[11.125rem]'>+880 1234-567890</span>
                </p>
                <p className='mt-3 flex items-center justify-start gap-x-2'>
                    <MdOutlineEmail className='text-2xl' />
                    <span className='text-white/70 max-w-[11.125rem]'>emart@mail.com</span>
                </p>
                <p className='mt-3 flex items-start justify-start gap-x-2'>
                    <GoHome className='text-2xl' />
                    <span className='text-white/70 max-w-[11.125rem]'>
                        1901 Thornridge Cir. Shiloh, Hawaii 81063
                    </span>
                </p>
            </div>
        </section>
    );
}
