import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaStar, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

export default function Review() {
    return (
        <div className='mb-5 flex items-start gap-x-3'>
            <img
                src='/logo.png'
                alt='user image'
                className='size-12 object-cover rounded-full'
            />

            {/* Review Content */}
            <div className='flex-1'>
                <div className='flex items-start justify-between'>
                    <div className='flex items-center gap-2'>
                        <h3 className='font-semibold text-gray-900'>
                            Akash Mirza
                        </h3>
                        <div className='flex items-center gap-1'>
                            <BsFillPatchCheckFill className='text-sm text-blue-500' />
                            <span className='text-xs text-gray-500'>
                                Verified Purchase
                            </span>
                        </div>
                    </div>
                    {/* Star Rating */}
                    <div className='flex gap-0.5'>
                        {[...Array(5)].map((_, i) => (
                            <FaStar
                                key={i}
                                className='w-5 h-5 fill-yellow-400 text-yellow-400'
                            />
                        ))}
                    </div>
                </div>

                {/* Date */}
                <p className='text-sm text-gray-500 mb-2'>January 24, 2025</p>

                {/* Review Text */}
                <p className='text-gray-700 mb-1'>
                    Very good product. thank you seller.
                </p>

                {/* Product Images */}
                <section className='grid grid-cols-3 gap-2'>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className='col-span-1 max-h-52 border'>
                            <img
                                src='https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=80'
                                className='w-full h-full object-contain'
                            />
                        </div>
                    ))}
                </section>

                {/* Color Family Info */}
                <div className='mt-4 flex items-center gap-2'>
                    <span className='text-gray-600'>Color Family: Black</span>
                    <div className='flex items-center gap-1 text-gray-500'>
                        <FaRegThumbsUp className='w-4 h-4' />
                        <span>3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
