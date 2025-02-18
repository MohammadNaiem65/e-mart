'use client';

import { useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';

export default function QuestionForm() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section className='w-[44.75rem] mt-14'>
            <h1 className='text-4xl font-bold mb-6 text-[#ff6347]'>
                Have Questions?
            </h1>

            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label
                        htmlFor='userName'
                        className='block text-gray-700 mb-2'
                    >
                        User Name
                    </label>
                    <input
                        type='text'
                        id='userName'
                        name='userName'
                        value={formData.userName}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6347] focus:border-transparent'
                        placeholder='User Name'
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 mb-2'>
                        Your Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff6347] focus:border-transparent'
                        placeholder='Your Email'
                    />
                </div>

                <div className='mb-6'>
                    <label
                        htmlFor='message'
                        className='block text-gray-700 mb-2'
                    >
                        Your Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#ff6347] focus:border-transparent'
                        placeholder='Your Message'
                    />
                </div>

                <button
                    type='submit'
                    className='flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-md hover:bg-[#ff5335] transition-colors duration-200'
                >
                    <MdCloudUpload className='text-xl' />
                    Submit
                </button>
            </form>
        </section>
    );
}
