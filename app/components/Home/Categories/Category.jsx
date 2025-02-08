export default function Category({ category }) {
    const { name } = category || {};

    return (
        <div className='flex flex-col items-center justify-center gap-y-4'>
            <div
                style={{ backgroundImage: 'url(./category-bg.svg)' }}
                className='size-[6.875rem] p-1 border-[3px] border-[#E1DCD0] bg-no-repeat bg-center flex items-center justify-center rounded-full'
            >
                <img
                    src='./category.png'
                    alt={name}
                    className='size-24 rounded-full'
                />
            </div>

            <span className='font-bold text-sm truncate'>{name}</span>
        </div>
    );
}
