import Review from './Review';

export default function Reviews() {
    return (
        <section className='mt-9'>
            {Array.from({ length: 4 }).map((_, index) => (
                <Review key={index} />
            ))}
        </section>
    );
}
