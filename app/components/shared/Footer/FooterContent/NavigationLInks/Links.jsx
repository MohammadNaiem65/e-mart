import Link from 'next/link';

export default function Links() {
    return (
        <section>
            <h2 className='text-[1.75rem]'>Useful Links</h2>

            <div className='mt-6 flex flex-col gap-y-1'>
                <Link href='/about-us' className='capitalize'>
                    About Us
                </Link>
                <Link href='/contact-us' className='capitalize'>
                    Contact Us
                </Link>
                <Link href='/privacy-policy' className='capitalize'>
                    Privacy Policy
                </Link>
                <Link href='/refund-policy' className='capitalize'>
                    Refund Policy
                </Link>
                <Link href='/all-products' className='capitalize'>
                    All Products
                </Link>
                <Link href='/contact' className='capitalize'>
                    Contact
                </Link>
            </div>
        </section>
    );
}
