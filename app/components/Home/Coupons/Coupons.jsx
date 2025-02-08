import GiftCards from './GiftCards';

export default function Coupons() {
    const haveVoucher = true;

    const giftCards = [
        { img: '/coupons/coupon-1.png' },
        { img: '/coupons/coupon-2.png' },
        { img: '/coupons/coupon-3.png' },
        { img: '/coupons/coupon-4.png' },
    ];

    return (
        <section className='mt-20'>
            <h2 className='mb-[2.188rem] border-b border-stroke text-2xl/[3.9rem] font-bold'>
                Gift Card and Coupon
            </h2>

            <section className='grid grid-cols-12 items-center'>
                {/* Gift Cards */}
                <GiftCards giftCards={giftCards} />

                {/* Coupon */}
                {haveVoucher && (
                    <div className='col-span-4'>
                        <img
                            src='/coupons/voucher.png'
                            alt='voucher'
                            className='max-w-96 max-h-[11.875rem] w-full h-auto'
                        />
                    </div>
                )}
            </section>
        </section>
    );
}
