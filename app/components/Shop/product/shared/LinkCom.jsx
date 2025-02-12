'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LinkCom({ href, className, children }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                className,
                pathname === href
                    ? 'text-highlight underline underline-offset-8'
                    : 'text-[#7E7E7E]'
            )}
        >
            {children}
        </Link>
    );
}
