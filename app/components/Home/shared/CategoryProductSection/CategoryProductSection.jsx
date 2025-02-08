import Product from './Product';

/**
 * A component that displays a category image and a list of products in a grid
 *
 * @param {string} image - The URL of the category image
 * @param {'start'|'center'|'end'} [imagePosition='center'] - The position of the category image in the grid
 * @param {Array} products - A list of products to display
 * @returns {JSX.Element} A component that displays a category image and a list of products in a grid
 */
export default function CategoryProductSection({
    image,
    imagePosition = 'center',
    products,
}) {
    const gridTemplateColumn =
        imagePosition === 'start'
            ? 'grid-cols-[17.5rem_auto_auto_auto_auto]'
            : imagePosition === 'center'
            ? 'grid-cols-[auto_auto_17.5rem_auto_auto]'
            : imagePosition === 'end' &&
              'grid-cols-[auto_auto_auto_auto_17.5rem]';

    const columnSpan =
        imagePosition === 'start'
            ? 'col-start-1 col-end-2'
            : imagePosition === 'center'
            ? 'col-start-3 col-end-4'
            : imagePosition === 'end' && 'col-start-5 col-end-6';

    return (
        <section
            className={`w-full grid grid-rows-2 gap-4 overflow-hidden ${gridTemplateColumn}`}
        >
            {/* Category image */}
            <div
                className={`w-[17.5rem] h-[37.5rem] row-span-full rounded-lg ${columnSpan}`}
            >
                <img
                    src={image}
                    alt='category image'
                    className='w-[17.5rem] h-[37.5rem] rounded-lg'
                />
            </div>

            {/* Products */}
            {products?.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </section>
    );
}
