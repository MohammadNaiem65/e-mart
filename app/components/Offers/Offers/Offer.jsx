'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { IoCopyOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

export default function Offer() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText('promoCode');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AlertDialog>
            <div className='w-96'>
                {/* Header Image/Content */}
                <img
                    src='/coupons/offer.png'
                    alt='offer'
                    className='w-full h-60 rounded-t-2xl'
                />

                {/* Coupon Card */}
                <div className='bg-white rounded-b-2xl p-6 shadow-lg'>
                    {/* Tags */}
                    <div className='mb-4 text-sm text-highlight flex gap-3'>
                        <span className='px-4 py-2 border border-[#FFC8B6] bg-primary/15  rounded-lg'>
                            Free Delivery
                        </span>
                        <span className='px-4 py-2 border border-[#FFC8B6] bg-primary/15  rounded-lg'>
                            25 Feb, 25
                        </span>
                    </div>

                    {/* Offer Text */}
                    <h3 className='mb-5 text-primary text-[22px]/[31px] font-medium'>
                        Get Exclusive Free Delivery on Purchase over $300
                    </h3>

                    {/* Coupon Button/Code */}
                    <AlertDialogTrigger className='w-[21rem] flex justify-start relative rounded-full overflow-hidden'>
                        <span
                            onClick={() => setIsRevealed(true)}
                            className='w-2/3 py-3 bg-primary text-white text-lg font-medium transition-all rounded-full relative z-10'
                        >
                            Show Coupon
                        </span>

                        <span className='w-2/3 pr-5 border border-primary border-dashed text-primary flex items-center justify-end absolute top-0 right-0 bottom-0 rounded-full'>
                            <span className='blur-[3px]'>FREEDEL300</span>
                        </span>
                    </AlertDialogTrigger>
                </div>
            </div>

            <AlertDialogContent className='max-w-[60rem] w-full p-0 block'>
                {/* Close button */}
                <AlertDialogCancel className='size-20 p-0 border-none outline-none text-gray-400 absolute top-0 right-0 shadow-none [&_svg]:size-8 hover:text-gray-600 hover:bg-transparent'>
                    <RxCross2 className='size-20' />
                </AlertDialogCancel>

                {/* Promo code section */}
                <div className='mt-16 pb-20 border-b flex items-center justify-center gap-4 relative'>
                    <div>
                        <p className='min-w-[28.75rem] px-6 py-3 border-2 border-dashed border-primary text-2xl text-center font-bold text-gray-700 rounded-full'>
                            asdf34
                        </p>

                        {/* Continue link */}
                        <div className='w-[28.75rem] text-center absolute top-20'>
                            Continue to{' '}
                            <Link
                                href='./'
                                className=' '
                                style={{ color: '#FF6F61' }}
                            >
                                www.e-mart.com
                            </Link>
                        </div>
                    </div>
                    <button
                        onClick={handleCopy}
                        className='bg-primary text-white px-7 py-4 flex items-center gap-2 transition-colors rounded-full'
                    >
                        {copied ? (
                            <>
                                <FaCheck />
                                COPIED
                            </>
                        ) : (
                            <>
                                <IoCopyOutline />
                                COPY
                            </>
                        )}
                    </button>
                </div>

                {/* Title and description */}
                <AlertDialogHeader className='px-11 py-20'>
                    <AlertDialogTitle className='text-[2rem]/[1.75rem] font-medium'>
                        Malesuada Fermentum Tortor
                    </AlertDialogTitle>
                    <p className='text-xl/[1.75rem] font-medium text-mute'>
                        Expires: 26 February 2025
                    </p>

                    <AlertDialogDescription className='!mt-6 text-lg/[1.75rem] font-normal text-mute'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </AlertDialogDescription>
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}
