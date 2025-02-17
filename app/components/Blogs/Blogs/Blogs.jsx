import Blog from './Blog';

export default function Blogs() {
    const blog = {
        category: "67986d3d60c5024225bf3e81",
        author: "67986c8660c5024225bf3e76",
        name: "The Future of AI in Everyday Life 3",
        slug: "The Future-of-AI-in-Everyday-Life 3",
        header: "How AI is Changing the World",
        address: "https://example.com/future-ai",
        summary: "Artificial Intelligence is revolutionizing industries and daily life.",
        description: "AI technology is growing rapidly, influencing businesses, healthcare, and consumer applications...",
        footer: "Stay updated with the latest AI trends!",
        badge: "Trending",
        type: "Technology",
        isVisible: true,
        isFeatured: false,
        additionalUrl: "https://example.com/tech-blog",
        thumbnail: "https://via.placeholder.com/100x100?text=Thumbnail",
        banner: "https://via.placeholder.com/600x200?text=Banner",
        logo: "https://via.placeholder.com/150x150?text=Logo"
    };

    return (
        <section className='col-span-8 flex flex-col gap-y-5'>
            {Array.from({ length: 4 }).map((_, index) => (
                <Blog key={index} blog={blog} />
            ))}
        </section>
    );
}
