import Reviews from '@/app/components/Shop/product/Reviews/Reviews';
import { FaStar } from 'react-icons/fa';

export default function Review() {
    const averageRating = 2.5;
    const totalReviews = 10;
    const ratingCounts = [1, 2, 3, 4, 0];
    const maxRating = 5;

    const getPercentage = (count) => {
        return (count / totalReviews) * 100;
    };

    return (
        <section>
            {/* Average Rating Display */}
            <div className='mt-9 mb-4 flex items-end gap-2'>
                <span className='text-3xl text-[#01AB31] font-medium'>
                    {averageRating.toFixed(2)}
                </span>
                <span className='ml-2 mb-1 text-sm text-gray-500'>
                    (Based on {totalReviews}{' '}
                    {totalReviews === 1 ? 'review' : 'reviews'})
                </span>
            </div>

            {/* Rating Bars */}
            <div className='pb-9 border-b space-y-2'>
                {[...Array(maxRating)].map((_, index) => {
                    const rating = maxRating - index;
                    const count = ratingCounts[maxRating - rating];
                    const percentage = getPercentage(count);

                    return (
                        <div key={rating} className='flex items-center gap-2'>
                            <div className='flex items-center gap-1 w-24'>
                                {[...Array(rating)].map((_, starIndex) => (
                                    <FaStar
                                        key={starIndex}
                                        size={16}
                                        className='text-yellow-400'
                                    />
                                ))}
                                {[...Array(maxRating - rating)].map(
                                    (_, starIndex) => (
                                        <FaStar
                                            key={starIndex}
                                            size={16}
                                            className='fill-gray-200 text-gray-200'
                                        />
                                    )
                                )}
                            </div>

                            {/* Rating Bar */}
                            <div className='flex-1 h-4 bg-gray-200 rounded-full overflow-hidden'>
                                <div
                                    className='h-full bg-yellow-400 rounded-full'
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
