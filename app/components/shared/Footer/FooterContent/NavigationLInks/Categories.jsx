import Link from 'next/link';

export default function Categories() {
    const categories = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'Shop',
            url: '/shop',
        },
        {
            name: 'Offers',
            url: '/offers',
        },
        {
            name: 'Blogs',
            url: '/blogs',
        },
        {
            name: 'About Us',
            url: '/about-us',
        },
        {
            name: 'Contact Us',
            url: '/contact-us',
        },
        {
            name: 'Privacy Policy',
            url: '/privacy-policy',
        },
        {
            name: 'Refund Policy',
            url: '/refund-policy',
        },
        {
            name: 'FAQ',
            url: '/faq',
        },
    ];

    return (
        <section>
            <h2 className='text-xl'>Categories</h2>

            <div className='mt-6 flex flex-col gap-y-1'>
                {categories.map((category, index) => (
                    <Link
                        href={`/shop?category=${category.url}`}
                        key={index}
                        className='w-fit text-mute hover:text-white capitalize'
                    >
                        {category.name}
                    </Link>
                ))}
            </div>
        </section>
    );
}
