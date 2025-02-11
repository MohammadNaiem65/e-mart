import ProductDetails from '@/app/components/Shop/product/ProductDetails/ProductDetails';
import RelatedProducts from '@/app/components/Shop/product/RelatedProducts/RelatedProducts';

export default async function Product({ params }) {
    const { slug } = await params;

    return (
        <section className='w-full mt-4 grid grid-cols-12'>
            <ProductDetails slug={slug} />

            <RelatedProducts />
        </section>
    );
}
