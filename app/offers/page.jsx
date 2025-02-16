import Image from 'next/image';
import PageFilters from '../components/Offers/PageFilters/PageFilters';
import Offers from '../components/Offers/Offers/Offers';

export default function page() {
    return (
        <section>
            <Image
                src='/offers-banner.png'
                alt='banner'
                width={1440}
                height={450}
                className='mt-14'
            />

            <section className='mt-14 pb-1 border-b border-stroke flex justify-between items-center'>
                <h2 className='text-[1.375rem] font-semibold'>All Offers</h2>

                <PageFilters />
            </section>

            <Offers />
        </section>
    );
}
