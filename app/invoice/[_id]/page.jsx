'use client';

import React from 'react';
import Image from 'next/image';
import html2pdf from 'html2pdf.js';
import { Download, House, Phone, Mail } from 'lucide-react';

function App() {
    const handleDownload = () => {
        const element = document.getElementById('invoice');
        const opt = {
            margin: 1,
            filename: 'invoice.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        };
        html2pdf().set(opt).from(element).save();
    };

    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <div id='invoice' className='bg-white p-8 max-w-4xl mx-auto'>
                {/* Header */}
                <div className='flex justify-between items-start mb-8'>
                    <div>
                        <Image
                            src='/logo.png'
                            alt='logo'
                            width={175}
                            height={97}
                        />

                        <p className='mt-2 text-mute'>Date: 18/01/25</p>
                    </div>
                    <div className='bg-gray-100 px-4 py-2'>
                        <h2 className='text-2xl font-bold'>INVOICE</h2>
                        <p>Order No: #458542</p>
                    </div>
                </div>

                {/* Invoice Details */}
                <div className='text-primary grid grid-cols-2 gap-8 mb-8'>
                    <div>
                        <h3 className=' mb-2'>INVOICE FROM:</h3>
                        <h4 className='mb-2 pb-2 border-b font-semibold text-2xl border-stroke'>
                            E-Mart
                        </h4>
                        <p className='flex items-center gap-2'>
                            <Phone className='size-4' /> +880 1714-243446
                        </p>
                        <p className='flex items-center gap-2'>
                            <Mail className='size-4' /> sales@ngenitltd.com
                        </p>
                        <p className='flex items-start gap-2'>
                            <House className='size-4 mt-1' />{' '}
                            <span>
                                Mahfuza Tower (5th Floor), 36-37, Ring Road,
                                Mohammadpur, Dhaka 1207
                            </span>
                        </p>
                    </div>
                    <div>
                        <h3 className=' mb-2'>BILL TO:</h3>
                        <h4 className='mb-2 pb-2 border-b font-semibold text-2xl border-stroke'>
                            Wade Warren
                        </h4>
                        <p className='flex items-center gap-2'>
                            <Phone className='size-4' /> (406) 555-0120
                        </p>
                        <p className='flex items-center gap-2'>
                            <Mail className='size-4' /> sales@ngenitltd.com
                        </p>
                        <p className='flex items-start gap-2'>
                            <House className='size-4 mt-1' /> Mahfuza Tower (5th
                            Floor), 36-37, Ring Road, Mohammadpur, Dhaka 1207
                        </p>
                    </div>
                </div>

                {/* Invoice Items */}
                <div className='mb-8'>
                    <div className='bg-primary text-white grid grid-cols-4 p-3'>
                        <div>DESCRIPTION</div>
                        <div className='text-center'>QTY</div>
                        <div className='text-center'>UNIT PRICE</div>
                        <div className='text-right'>TOTAL</div>
                    </div>

                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            className='border-b p-3 grid grid-cols-4 odd:bg-gray-100'
                            key={index}
                        >
                            <div>Air Jordan 1 Top 3 Sneaker (DS)</div>
                            <div className='text-center'>5</div>
                            <div className='text-center'>$14.81</div>
                            <div className='text-right'>$351.02</div>
                        </div>
                    ))}
                </div>

                {/* Conditions and Totals */}
                <div className='grid grid-cols-2 gap-8'>
                    <div>
                        <h3 className='font-bold mb-2'>Terms and Conditions</h3>
                        <p className='text-gray-600 text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                        </p>

                        <h3 className='font-bold mt-4 mb-2'>Payment Method:</h3>
                        <p className='text-gray-600'>Cash on Delivery</p>
                    </div>

                    <div className='space-y-2'>
                        <div className='flex justify-between'>
                            <span>SUBTOTAL</span>
                            <span>$328.95</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>DISCOUNT</span>
                            <span>$739.65</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>TAX RATE</span>
                            <span>$490.51</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>TOTAL TAX</span>
                            <span>$396.84</span>
                        </div>
                        <div className='flex justify-between'>
                            <span>SHIPPING</span>
                            <span>$710.68</span>
                        </div>
                        <div className='bg-[#4a90e2] text-white p-2 flex justify-between'>
                            <span>GRAND TOTAL</span>
                            <span>$739.65</span>
                        </div>
                        <button
                            onClick={handleDownload}
                            className='w-full mt-4 py-2 px-4 bg-primary text-white flex items-center justify-center gap-2 rounded hover:bg-[#ff5335] transition-colors'
                        >
                            <Download size={20} />
                            Download PDF
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className='mt-8 pt-8 border-t text-gray-600 flex justify-between'>
                    <span>www.emart.com</span>
                    <span>+880 1714-243446</span>
                </div>
            </div>
        </div>
    );
}

export default App;
