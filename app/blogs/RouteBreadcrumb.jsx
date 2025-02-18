'use client';

import { usePathname } from 'next/navigation';
import { FaBloggerB } from 'react-icons/fa';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function RouteBreadcrumb() {
    const pathname = usePathname();

    const paths = pathname?.split('/')?.slice(1);

    return (
        <Breadcrumb className='col-span-12'>
            <BreadcrumbList>
                {/* Shop Icon */}
                <BreadcrumbItem>
                    <BreadcrumbLink href='/blogs'>
                        <FaBloggerB className='text-lg text-highlight' />
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Links */}
                {paths?.map((path, index, { length }) =>
                    index === length - 1 ? (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbPage className='capitalize'>
                                {path}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    ) : (
                        <div key={index} className='flex items-center gap-x-2'>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='capitalize hover:text-highlight'>
                                    {path}
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator>/</BreadcrumbSeparator>
                        </div>
                    )
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
