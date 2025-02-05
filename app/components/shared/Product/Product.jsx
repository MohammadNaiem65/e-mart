import RatingStars from '../RatingStars/RatingStars';

export default function Product({ product }) {
    const { name, img, price, rating, totalRatings, badge, badgeColor } =
        product || {};

    return (
        <div className='w-[17.75rem] h-[23.875rem] border border-stroke relative rounded-[0.625rem]'>
            {badge && (
                <span
                    className={`absolute top-5 left-5 text-white text-[10px]/[0.938rem] font-semibold px-3 py-1 rounded-full ${
                        badgeColor ? `bg-[${badgeColor}]` : 'bg-[#DA5555]'
                    }`}
                >
                    {badge}
                </span>
            )}

            <img
                src={img}
                alt=''
                className='w-[17.625rem] h-[15.813rem] border-b border-stroke'
            />

            <div className='p-4'>
                <div className='flex items-center justify-between'>
                    <h3 className='max-w-[10.3rem] truncate'>{name}</h3>

                    <button className='size-[2.125rem] bg-[#F9F9F9] rounded-full cursor-pointer'>
                        <img
                            src='/icons/favorite.svg'
                            alt='wish list'
                            className='size-[2.125rem] p-[0.625rem]'
                        />
                    </button>
                </div>

                <div className='mt-1 flex items-center gap-x-[4px]'>
                    <RatingStars
                        length={5}
                        rating={rating}
                        height='1rem'
                        width='1rem'
                        activeColor='#FF9500'
                        muteColor='#cccccc'
                        className='flex items-center'
                    />
                    <span className='text-sm text-gray-500 ml-1'>
                        ({totalRatings})
                    </span>
                </div>

                <p className='text-[#4880FF] text-md/[0.994rem] font-semibold mt-3'>
                    ${price}
                </p>
            </div>
        </div>
    );
}
