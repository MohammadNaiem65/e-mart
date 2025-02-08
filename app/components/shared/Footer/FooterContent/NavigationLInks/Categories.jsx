import Link from 'next/link';

export default function Categories() {
    return (
        <section>
            <h2 className='text-[1.75rem]'>Categories</h2>

            <div className='mt-6 flex flex-col gap-y-1'>
                <Link href='/about-us' className='capitalize'>
                    Electrical Devices
                </Link>
                <Link href='/contact-us' className='capitalize'>
                    Gadgets
                </Link>
                <Link href='/privacy-policy' className='capitalize'>
                    Health & Beauty
                </Link>
                <Link href='/refund-policy' className='capitalize'>
                    Sports & Outdoor
                </Link>
                <Link href='/all-products' className='capitalize'>
                    Fashion And Beauty
                </Link>
                <Link href='/contact' className='capitalize'>
                    Furniture
                </Link>
            </div>
        </section>
    );
}
