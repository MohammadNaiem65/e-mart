'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function NavLink({ href, className, children }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`${className} ${
                pathname === href ? 'text-highlight' : null
            }`}
        >
            {children}
        </Link>
    );
}
