import MoreProducts from '@/app/components/Shop/product/MoreProducts/MoreProducts';
import ProductDetails from '@/app/components/Shop/product/ProductDetails/ProductDetails';
import RelatedProducts from '@/app/components/Shop/product/RelatedProducts/RelatedProducts';
import RoutePath from '@/app/components/Shop/product/RoutePath/RoutePath';
import LinkCom from '@/app/components/Shop/product/shared/LinkCom';

export default async function layout({ children, params }) {
    const { slug } = await params;
    const link = `/shop/product/${slug}`;

    return (
        <section className='mt-[2.375rem]'>
            <RoutePath path={slug} />

            <section className='w-full mt-4 grid grid-cols-12 gap-x-5'>
                <section className='col-span-8'>
                    <ProductDetails slug={slug} />

                    <div className='w-full mt-3 text-xl flex gap-x-[19px] divide-x-2'>
                        <LinkCom href={link}>Description</LinkCom>
                        <LinkCom href={link + '/specification'} className='pl-[19px]'>
                            Specification
                        </LinkCom>
                        <LinkCom href={link + '/review'} className='pl-[19px]'>Review</LinkCom>
                    </div>
                    {children}
                </section>

                <RelatedProducts />
            </section>

            <MoreProducts />
        </section>
    );
}
