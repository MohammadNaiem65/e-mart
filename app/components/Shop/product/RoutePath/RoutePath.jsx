import { AiOutlineShop } from 'react-icons/ai';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function RoutePath({ path }) {
    return (
        <Breadcrumb>
            <BreadcrumbList>
                {/* Shop Icon */}
                <BreadcrumbItem>
                    <BreadcrumbLink href='/shop'>
                        <AiOutlineShop className='text-lg' />
                    </BreadcrumbLink>
                </BreadcrumbItem>

                {/* Links */}
                <BreadcrumbItem>
                    <BreadcrumbLink href='/shop'>Shop</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>/</BreadcrumbSeparator>

                <BreadcrumbItem>
                    <BreadcrumbLink href='/shop'>Product</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator>/</BreadcrumbSeparator>

                <BreadcrumbItem>
                    <BreadcrumbPage>{path}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    );
}
