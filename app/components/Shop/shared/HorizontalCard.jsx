import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa6';

export default function HorizontalCard() {
    const rating = 4.5;

    return (
        <div className='h-[5.9rem] my-5 flex items-center gap-x-7'>
            <img
                src='/product-2.png'
                alt='product'
                className='size-[5.9rem] border border-stroke object-cover rounded-2xl'
            />

            <div className='w-[16.5rem] h-[5.9rem] flex flex-col justify-between items-start'>
                <h4 className='line-clamp-2 text-base'>
                    Realme air buds pro TWS wireless Bluetooth Smart headphone.
                    heh hehe hehe
                </h4>

                <div className='flex items-center gap-x-2'>
                    <div className='text-highlight flex items-center gap-x-1'>
                        {Array.from({ length: 5 }, (_, i) => {
                            if (rating >= i + 1) {
                                return <FaStar key={i} />;
                            } else if (rating >= i + 0.5) {
                                return <FaStarHalfAlt key={i} />;
                            } else {
                                return <FaRegStar key={i} />;
                            }
                        })}
                    </div>

                    <span className='text-xs text-mute'>(5 Reviews)</span>
                </div>

                <span className='text-base text-[#7e7e7e]'>${150}</span>
            </div>
        </div>
    );
}
