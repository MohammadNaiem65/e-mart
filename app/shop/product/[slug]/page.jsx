import Link from 'next/link';

export default async function Product({ params }) {
    const { slug } = await params;
    const link = `/shop/product/${slug}`;

    return (
        <section className='w-full mt-4 grid grid-cols-12'>
            <Link href={link}>Description</Link>
            <Link href={link + '/specification'}>Description</Link>
            <Link href={link + '/review'}>Description</Link>
        </section>
    );
}
