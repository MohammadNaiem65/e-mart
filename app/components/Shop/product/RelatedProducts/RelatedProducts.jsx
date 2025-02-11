import HorizontalCard from '../../shared/HorizontalCard';

export default function RelatedProducts() {
    return (
        <section className='col-span-4'>
            <h3 className='pb-2 border-b border-stroke text-2xl font-semibold'>
                More Related Product{' '}
            </h3>

            <section>
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <HorizontalCard key={index} />
                    ))
                }
            </section>
        </section>
    );
}
