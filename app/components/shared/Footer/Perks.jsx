import { FaTruckFast } from 'react-icons/fa6';
import { GoShieldLock } from 'react-icons/go';
import { MdAddShoppingCart } from 'react-icons/md';

export default function Perks() {
    const perks = [
        {
            icon: <MdAddShoppingCart />,
            title: 'Limited Offer',
            description: '40% off on selected items!',
        },
        {
            icon: <FaTruckFast />,
            title: 'Free Delivery',
            description: 'Spend $99 and get free delivery!',
        },
        {
            icon: <GoShieldLock />,
            title: 'Safe Payments',
            description: 'Guaranteed protection!',
        },
    ];
    return (
        <section className='h-[5.375rem] flex items-center justify-between gap-x-1'>
            {perks.map((perk, index) => (
                <div key={index} className='w-1/3 h-[5.375rem] bg-light flex justify-center items-center gap-x-5'>
                    <span className='text-[2.5rem] text-highlight'>{perk.icon}</span>
                    <div>
                        <h3 className='text-xl font-semibold'>{perk.title}</h3>
                        <p className='text-base text-dark/30 font-semibold'>{perk.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
