import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { FaBloggerB } from 'react-icons/fa';

export default function RouteBreadcrumb({ path }) {
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
                {path ? (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='/blogs'>Blogs</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator>/</BreadcrumbSeparator>

                        <BreadcrumbItem>
                            <BreadcrumbPage>{path}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                ) : (
                    <BreadcrumbItem>
                        <BreadcrumbPage>Blogs</BreadcrumbPage>
                    </BreadcrumbItem>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
