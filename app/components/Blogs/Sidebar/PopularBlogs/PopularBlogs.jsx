import Blog from './Blog';

export default function PopularBlogs() {
    return (
        <section>
            <h2 className='mb-4 pb-4 border-b border-stroke font-semibold text-2xl'>
                Popular Blogs
            </h2>

            <section className='space-y-2'>
                {Array.from({ length: 3 }).map((_, index) => (
                    <Blog key={index} />
                ))}
            </section>
        </section>
    );
}
