'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import Sidebar from '../Sidebar';

export default function FAQs() {
    const [activeCategory, setActiveCategory] = useState('Orders and Payments');

    const faqData = {
        'Orders and Payments': [
            {
                question: 'How do I place an order?',
                answer: 'Browse our products, add your desired items to the cart, and proceed to checkout. Follow the instructions to complete your purchase. Orders can be modified or canceled within [specific time frame, e.g., 24 hours] of placing the order. Contact us immediately at [contact info] for assistance.',
            },
            {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal for your convenience.',
            },
        ],
        'Shipping and Delivery': [
            {
                question: 'How long does shipping take?',
                answer: 'Domestic orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination.',
            },
        ],
        'Returns and Refunds': [
            {
                question: 'What is your return policy?',
                answer: 'We offer a 30-day return policy for unused items in original packaging. Return shipping costs are the responsibility of the customer.',
            },
        ],
        'Products and Stock': [
            {
                question: 'Are all items in stock?',
                answer: "Items marked as 'In Stock' are available for immediate shipping. Out of stock items will be clearly marked on the product page.",
            },
        ],
        'Account and Support': [
            {
                question: 'How do I create an account?',
                answer: "Click the 'Sign Up' button in the top right corner and follow the prompts to create your account. You'll need to verify your email address to complete the process.",
            },
        ],
    };

    return (
        <section className='mt-10 flex'>
            {/* Left sidebar */}
            <Sidebar
                faqData={faqData}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            
            {/* Main content */}
            <div className='flex-1 p-8'>
                <Accordion type='single' collapsible className='w-full'>
                    {faqData[activeCategory].map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className='border-stroke'
                        >
                            <AccordionTrigger className='text-base hover:no-underline'>
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className='text-gray-600'>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
