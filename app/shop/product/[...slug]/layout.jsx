import MoreProducts from '@/app/components/Shop/product/MoreProducts/MoreProducts';
import RoutePath from '@/app/components/Shop/product/RoutePath/RoutePath';

export default async function layout({ children, params }) {
    const { slug } = await params;

    return (
        <section className='mt-[2.375rem]'>
            <RoutePath path={slug} />

            {children}

            <MoreProducts />
        </section>
    );
}
