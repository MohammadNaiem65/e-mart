import Image from 'next/image';
import Link from 'next/link';
import NavLink from './NavLink';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'Offers', href: '/offers' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Pages', href: '/pages' },
];

// Badge component
function Badge({ children, className }) {
    return (
        <span
            className={`size-4 flex items-center justify-center absolute top-2 right-3 bg-primary text-white rounded-full ${className}`}
        >
            {children}
        </span>
    );
}

export default function Navbar() {
    return (
        <nav className='w-[1210px] h-[67px] mx-auto mt-[2.313rem] flex items-center justify-between text-primary'>
            <Link href='/'>
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={176}
                    height={63}
                    priority
                />
            </Link>

            <div className='text-lg text-primary flex items-center space-x-[1.563rem] divide-x-2 divide-stroke'>
                {links.map((link, index) => (
                    <NavLink
                        key={index}
                        href={link.href}
                        className='pl-[1.563rem] capitalize'
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>

            <div className='text-xs text-[#808080] flex items-center justify-end space-x-[0.625rem]'>
                <Link
                    href={'/cart'}
                    className='p-[0.625rem] flex flex-col items-center justify-end relative'
                >
                    <img
                        src='/icons/shopping_cart.svg'
                        alt='cart'
                        className='size-[1.875rem]'
                    />
                    <span>Cart</span>
                    <Badge className='right-[6px]'>5</Badge>
                </Link>

                <Link
                    href={'/whishlist'}
                    className='p-[0.625rem] flex flex-col items-center justify-end relative'
                >
                    <img
                        src='/icons/favorite.svg'
                        alt='whishlist'
                        className='size-[1.875rem]'
                    />
                    <span>Whishlist</span>
                    <Badge>2</Badge>
                </Link>

                <Link
                    href={'/compare'}
                    className='p-[0.625rem] flex flex-col items-center justify-end'
                >
                    <img
                        src='/icons/text_compare.svg'
                        alt={'compare'}
                        className='size-[1.875rem]'
                    />
                    <span>Compare</span>
                </Link>
            </div>
        </nav>
    );
}
