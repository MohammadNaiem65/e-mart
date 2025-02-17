export default function Categories() {
    return (
        <section className='mb-8'>
            <h2 className='mb-4 pb-4 border-b border-stroke font-semibold text-2xl'>
                Categories
            </h2>
            <ul className='space-y-2'>
                {[
                    'Fashion',
                    'Electronics',
                    'Groceries',
                    'Gadgets',
                    "Baby's & Toy's",
                    'Travel',
                    'Life Style',
                ].map((category) => (
                    <li key={category}>
                        <a href='#' className='text-mute hover:text-highlight'>
                            {category}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
