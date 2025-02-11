import MoreProducts from '@/app/components/Shop/product/MoreProducts/MoreProducts';
import ProductDetails from '@/app/components/Shop/product/ProductDetails/ProductDetails';
import RelatedProducts from '@/app/components/Shop/product/RelatedProducts/RelatedProducts';
import RoutePath from '@/app/components/Shop/product/RoutePath/RoutePath';

export default async function layout({ children, params }) {
    const param = await params;

    console.log(param);

    return (
        <section className='mt-[2.375rem]'>
            <RoutePath path={param?.slug} />

            <section className='w-full mt-4 grid grid-cols-12'>
                <section className='col-span-8'>
                    <ProductDetails slug={param?.slug} />
                    {children}
                </section>

                <RelatedProducts />
            </section>

            <MoreProducts />
        </section>
    );
}
